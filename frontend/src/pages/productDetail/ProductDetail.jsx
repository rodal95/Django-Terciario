import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { consultarProducto } from '../../api/apiProductos'
import Botonera from '../../components/Botonera'
import { ProductCategory } from '../../components/ProductCategory'
import "./ProductDetail.css"
import { Informacion } from '../../components/Informacion'
export default function ProductDetail() {
    const [producto,setProducto] = useState()
    const params = useParams()
    const id = params.id

    useEffect(() => {
        async function traerProducto(){
            const response = await consultarProducto(id)
            setProducto(response.data)
        }
        traerProducto()
    }
    , [id])
  return (
    <div >
        {producto ? (
            <div>
                <div className='productDetail'>
                    <div>
                        <img src={producto.imagen} alt={producto.nombre} width="200px"/>
                    </div>
                    <div>
                        <h1>{producto.nombre}</h1>
                        <h2>${producto.precio}</h2>
                        <Botonera producto={producto}/>
                    </div>
                </div>
                <div>
                    <Informacion/>
                </div>
                <div className='productDetailOtros'>
                     <ProductCategory producto={producto}/>
                </div>
            </div>

        ) : (
            <div style={{height:"500px"}}>
                <button class="btn btn-primary" type="button" disabled>
                    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                    <span role="status">Cargando, aguarde por favor...</span>
                </button>
            </div>
        )}
    </div>
  )
}
