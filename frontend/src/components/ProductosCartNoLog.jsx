import React,{useState} from 'react'
import { toast } from 'react-hot-toast';

export function ProductosCartNoLog({producto}) {
    const [cantidad, setCantidad] = useState(producto.cantidad);


    const sumarCantidad = async () => {
        const newCantidad = cantidad + 1;
        setCantidad(newCantidad);

      };
      const restarCantidad = async () => {
        const newCantidad = cantidad - 1;
        setCantidad(newCantidad);
        if (newCantidad > 0) {

        } else {
          toast.error("La cantidad mínima es 1");

        }
      };
    const eliminarProducto = async () => {
        // Obtener el array carritoLocal del localStorage
        const carritoLocal = JSON.parse(localStorage.getItem('carritoLocal'));

        // Buscar el índice del producto a eliminar
        const index = carritoLocal.findIndex((item) => item.id === producto.id);

        // Si se encuentra el índice, eliminar el producto del array
        if (index !== -1) {
            carritoLocal.splice(index, 1);
        }

        // Actualizar el array carritoLocal en el localStorage
        localStorage.setItem('carritoLocal', JSON.stringify(carritoLocal));
        window.location.reload();
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
                        <button type="button" className="btn btn-primary" onClick={sumarCantidad}>+</button>
                        <button type="button" className="btn btn-primary" onClick={restarCantidad}>-</button>
                        <button type="button" className="btn btn-danger" onClick={eliminarProducto}>Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div> : <h1>Cargando</h1>}
    </>
  )
}
