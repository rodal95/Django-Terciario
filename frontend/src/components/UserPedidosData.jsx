import React from 'react'
import { useState,useEffect } from 'react'


export default function UserPedidosData({pedidos}) {

  return (
    <div>
      <h1 className="text-center">Lista de Pedidos</h1>
      {pedidos.map((pedido, pedidoIndex) => (
        <div key={pedidoIndex}>
          <h2>Pedido realizado {new Intl.DateTimeFormat('es-AR').format(new Date(pedido.fecha))}</h2>
          
          <table className='table'>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio Unitario</th>
                <th>SubTotal</th>
              </tr>
            </thead>
            <tbody className="table-group-divider"> 
              {pedido.productos.map((producto, productoIndex) => (
                <tr key={`${pedidoIndex}-${productoIndex}-${producto.id_producto}`}>
                  <td>{producto.nombre}</td>
                  <td>{producto.cantidad}</td>
                  <td>{producto.precio}</td>
                  <td>{producto.subtotal}</td>
                </tr>
              ))}
              
            </tbody>
          </table>
          <h2>Total ${pedido.total} pesos</h2>
        </div>
      ))}
    </div>
  )
}
