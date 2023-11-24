import React from 'react'
import "./UserPedidosData.css"


export default function UserPedidosData({pedidos}) {

  return (
    <div className='container-pedidos'>
      {pedidos.map((pedido, pedidoIndex) => (
        <div class="accordion" id={`accordionExample${pedidoIndex}`}>
          <div class="accordion-item" key={`pedido-${pedidoIndex}`}>
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${pedidoIndex}`} aria-expanded="false" aria-controls={`collapse-${pedidoIndex}`}>
                <div>
                  <h3>Pedido realizado el {new Intl.DateTimeFormat('es-AR').format(new Date(pedido.fecha))}</h3><br/>
                  <h3>Total <strong>${pedido.total}</strong></h3></div>
              </button>
            </h2>
            <div id={`collapse-${pedidoIndex}`} class="accordion-collapse collapse" data-bs-parent={`#accordionExample${pedidoIndex}`}>
              <div class="accordion-body">
                <table className='table-pedidos'>
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Cant.</th>
                      <th>Precio</th>
                      <th>SubTotal</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider"> 
                    {pedido.productos.map((producto, productoIndex) => (
                      <tr key={`${pedidoIndex}-${productoIndex}-${producto.id_producto}`}>
                        <td>
                          <div >{producto.nombre}</div>
                        </td>
                        <td>{producto.cantidad}</td>
                        <td>{producto.precio}</td>
                        <td>{producto.subtotal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>              
            </div>            
          </div>
        </div>
      ))}
</div>

  )
}
