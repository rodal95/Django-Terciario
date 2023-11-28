import React,{ useEffect, useState} from 'react'
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
    function truncateText(text, limit) {
        if (text.length <= limit) {
          return text;
        }
        return `${text.substring(0, limit)}...`;
      }
  return (
    <div >
        <div className='tituloProductoCategoria'>
            <h2>Tambien te puede interesar</h2>
        </div>

        {productosRelacionados.length > 0 ? (
            <div className='productosRelacionados'>
            {productosRelacionados.map((prod) => (
                <div key={prod.id_producto} className='eachProduct'>
                    <Link to={`/detalle/${prod.id_producto}`}>
                        <div className='imagenProducto'>
                             <img src={prod.imagen} alt={prod.nombre} />
                        </div>
                   
                    <h6>{truncateText(prod.nombre,20)}</h6>
                    <h6>${prod.precio}</h6>
                    </Link>
                </div>
            ))}
            </div>
        ) : (
            <>
                <button class="btn btn-primary" type="button" disabled>
                    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                    <span role="status">Cargando, aguarde por favor...</span>
                </button>
            
            </>
        )}
    </div>
  )
}
