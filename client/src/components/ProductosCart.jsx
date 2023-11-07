import React from 'react'

import { useState } from 'react';

export function ProductosCart({producto}) {
    const [cantidad, setCantidad] = useState(producto.cantidad);

    const sumarCantidad = () => {
        setCantidad(cantidad + 1);
    };

    const restarCantidad = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    const eliminarProducto = () => {
        // Aquí va la lógica para eliminar el producto del carrito
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Subtotal</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{producto.nombre}</td>
                        <td>{producto.precio}</td>
                        <td>
                            <button onClick={restarCantidad}>-</button>
                            {cantidad}
                            <button onClick={sumarCantidad}>+</button>
                        </td>
                        <td>{producto.precio * cantidad}</td>
                        <td>
                            <button onClick={eliminarProducto}>Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
