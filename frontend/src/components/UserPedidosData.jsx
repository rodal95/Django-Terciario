import React from 'react'



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
              </div>              
            </div>            
          </div>
        </div>
      ))}
</div>

  )
}
