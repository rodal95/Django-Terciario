import React from 'react';

export function ProductCard({ producto }) {
  const cardStyle = {
    width: '300px',
    height: '400px',
    margin: '10px',
  };
  return (
    <div key={producto.id}>
      <div className="card" style={cardStyle}>
        <img  src={producto.imagen} alt=""/>
        <div className="card-body">
          <h6 className="card-title">{producto.nombre}</h6>
          <h6>${producto.precio}</h6>
          <a href={`/detalle/${producto.id_producto}`} className="btn btn-dark">
            Ver Producto
          </a>
        </div>
      </div>
    </div>
  );
}