import { useState,useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { agregarProductoCarrito } from '../api/apiCarritos';
import Cookies from 'js-cookie';

export function ProductosCart({producto}) {
    const [cantidad, setCantidad] = useState(producto.cantidad);
    const [token, setToken]=useState(null)
    const tokenCookie = Cookies.get('access_token')
    useEffect(()=>{
        if(tokenCookie){
            setToken(tokenCookie)
        }
    }
    ,[])
    const sumarCantidad = async () => {
        const newCantidad = cantidad + 1
        setCantidad(newCantidad)
        await agregarProductoCarrito({'id_producto':producto.id_producto,'cantidad': 1},token)
        
    };
    const restarCantidad =async () => {
      
        const newCantidad = cantidad - 1
        setCantidad(newCantidad)
        if(newCantidad > 0){
            await agregarProductoCarrito({'id_producto':producto.id_producto,'cantidad': -1},token)
        }else{
            window.location.reload()
        }
            
       
        
        
    };

    const eliminarProducto = async () => {
        
        await agregarProductoCarrito({'id_producto':producto.id_producto,'cantidad': -producto.cantidad},token)
        setCantidad(0)
        window.location.reload()
    };

    return (
        <>
        {producto ? <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Subtotal</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{producto.id_producto}</td>
                        <td>{producto.precio}</td>
                        <td>
                            {cantidad}
                        </td>
                        <td>{producto.precio * cantidad}</td>
                        <td>
                            <button type="button" className="btn btn-primary" onClick={sumarCantidad}>+</button>
                            <button type="button" className="btn btn-primary" onClick={restarCantidad}>-</button>
                            <button type="button" className="btn btn-primary" onClick={eliminarProducto}>Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div> : <h1>Cargando</h1>}
        </>
    );
}
