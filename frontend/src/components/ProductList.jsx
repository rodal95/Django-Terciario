import React from 'react'
import { ProductCard } from './ProductCard'
import "./ProductList.css"
export function ProductList({productos}) {
  return (
    <div className='productList'>
      {productos ? <>
      {productos.map(producto => {
            return <ProductCard key={producto.id_producto} producto={producto}/>
        })}</>
        : <h1>Cargando...</h1>}
        
        
    </div>
  )
}
