import React from 'react';
import "./UserPedidosData.css";

export default function UserPedidosData({ pedidos }) {
  return (
    <div className='container-pedidos'>
      {pedidos.map((pedido, pedidoIndex) => (
        <div className="card mb-3" key={`pedido-${pedidoIndex}`}>
          <div className="card-header">
            <button className="btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${pedidoIndex}`} aria-expanded="false" aria-controls={`collapse-${pedidoIndex}`}>
              <div>
                <h3>Pedido realizado el {new Intl.DateTimeFormat('es-AR').format(new Date(pedido.fecha))}</h3>
                <h3>Total <strong>${pedido.total}</strong></h3>
              </div>
            </button>
          </div>
          <div id={`collapse-${pedidoIndex}`} className="collapse" data-bs-parent={`#accordionExample${pedidoIndex}`}>
            <div className="card-body">
              {pedido.productos.map((producto, productoIndex) => (
                <div className="card mb-3" key={`${pedidoIndex}-${productoIndex}-${producto.id_producto}`}>
                  <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">Cantidad: {producto.cantidad}</p>
                    <p className="card-text">Precio: {producto.precio}</p>
                    <p className="card-text">SubTotal: {producto.subtotal}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
              