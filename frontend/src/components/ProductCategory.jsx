import React,{useDebugValue, useEffect, useState} from 'react'
import { consultarProductoCategoria } from '../api/apiProductos'
import { Link } from 'react-router-dom'
import "./ProductCategory.css"
export function ProductCategory({ producto }) {
    const [productosRelacionados, setProductosRelacionados] = useState([])

    useEffect(() => {
    async function traerProductosCategoria() {
        const response = await consultarProductoCategoria(producto.categoria)
        const productosRelacionados = response.data

        const productosDiferentes = productosRelacionados.filter(
            (prod) => prod.id_producto !== producto.id_producto
        )
        setProductosRelacionados(productosDiferentes)
    }
    traerProductosCategoria()
    }, [producto])

  return (
    <div >
        <h2>Productos Relacionados</h2>
        {productosRelacionados.length > 0 ? (
            <div className='productosRelacionados'>
            {productosRelacionados.map((prod) => (
                <div key={prod.id_producto}>
                    <Link to={`/detalle/${prod.id_producto}`}>
                    <img src={prod.imagen} alt={prod.nombre} width="150px" />
                    <h4>{prod.nombre}</h4>
                    <h4>${prod.precio}</h4>
                    </Link>
                </div>
            ))}
            </div>
        ) : (
            <h2>Cargando...</h2>
        )}
    </div>
  )
}
