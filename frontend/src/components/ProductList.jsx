import React from 'react'
import { ProductCard } from './ProductCard'
import "./ProductList.css"
export function ProductList({productos}) {
  return (
    <div className='productList'>
        {productos.map(producto => {
            return <ProductCard key={producto.id_producto} producto={producto}/>
        })}
        
    </div>
  )
}
