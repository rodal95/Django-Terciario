import React from 'react';

export function ProductCard({ producto }) {
  const cardStyle = {
    width: '18rem',
  };
  return (
    <div key={producto.id}>
      <div className="card" style={cardStyle}>
        <img  src={producto.imagen}/>
        <div className="card-body">
          <h5 className="card-title">{producto.nombre}</h5>
          <h5>Precio ${producto.precio}</h5>
          <a href={`/producto/${producto.id_producto}`} className="btn btn-primary">
            Ver Producto
          </a>
        </div>
      </div>
    </div>
  );
}