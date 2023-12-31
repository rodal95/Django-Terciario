import { useState,useEffect } from 'react';
import { toast } from 'react-hot-toast';
import "./ProductosCart.css"
import Cookies from 'js-cookie';

export function ProductosCart({producto, actualizarTotal}) {
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
        const newCantidad = cantidad + 1;
        setCantidad(newCantidad);
        actualizarTotal(producto.id_producto, 1);
      };
      const restarCantidad = async () => {
        const newCantidad = cantidad - 1;
        setCantidad(newCantidad);
        if (newCantidad > 0) {
          actualizarTotal(producto.id_producto, -1);
        } else {
          toast.error("La cantidad mínima es 1");
          setCantidad(1)
        }
      };
      const eliminarProducto = async () => {
        actualizarTotal(producto.id_producto, -producto.cantidad);
      };

    return (
        <>
        {producto ? 
        <div className='ProductosCart'>
            <table className="table">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>$$</th>
                        <th>Cant.</th>
                        <th>Subtotal</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{producto.nombre}</td>
                        <td>{producto.precio}</td>
                        <td>
                            {cantidad}
                        </td>
                        <td>{producto.subtotal}</td>
                        <td>
                            <button type="button" className="btn btn-dark" onClick={sumarCantidad}>+</button>
                            <button type="button" className="btn btn-dark" onClick={restarCantidad}>-</button>
                            <button type="button" className="btn btn-danger" onClick={eliminarProducto}>Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div> : <h1>Cargando</h1>}
        </>
    );
}
