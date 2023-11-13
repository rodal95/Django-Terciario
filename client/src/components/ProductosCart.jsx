import { useState,useEffect } from 'react';
import { toast } from 'react-hot-toast';

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
        }
      };

      const eliminarProducto = async () => {
        actualizarTotal(producto.id_producto, -producto.cantidad);
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
