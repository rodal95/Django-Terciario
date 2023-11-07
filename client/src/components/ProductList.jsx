import React from 'react'
import { ProductCard } from './ProductCard'

export function ProductList({productos}) {
  return (
    <div>
        {productos.map(producto => {
            return <ProductCard key={producto.id_producto} producto={producto}/>
        })}
        
    </div>
  )
}
