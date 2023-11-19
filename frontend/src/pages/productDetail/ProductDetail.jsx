import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { consultarProducto } from '../../api/apiProductos'
import Botonera from '../../components/Botonera'
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
    <div>
        {producto ? (
            <div>
                <h1>{producto.nombre}</h1>
                <img src={producto.imagen} alt={producto.nombre} width="300px"/>
                <h2>${producto.precio}</h2>
                <p>{producto.descripcion}</p>
                <Botonera producto={producto}/>
            </div>

        ) : (
            <h1>Cargando...</h1>
        )}
    </div>
  )
}
