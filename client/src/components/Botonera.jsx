import React, { useEffect, useState } from 'react'
import { agregarProductoCarrito } from '../api/apiCarritos';
import Cookies from 'js-cookie';
import {toast} from 'react-hot-toast'

export default function Botonera({producto}) {
    const [cantidad,setCantidad]= useState(0)
    const [token, setToken]=useState(null)
    const tokenCookie = Cookies.get('access_token')
    useEffect(()=>{
        if(tokenCookie){
            setToken(tokenCookie)
        }
    }
    ,[])
    const sumar= ()=> {
        if(cantidad < producto.stock){
            setCantidad(cantidad + 1);
        }
        
    }
    const restar = ()=>{
        if(cantidad > 0)
        setCantidad(cantidad - 1);
    }
    const agregarCarrito = ()=>{
        if(token){
            const data = {
                "id_producto":producto.id_producto,
                "cantidad":cantidad
            }
            agregarProductoCarrito(data,token)
            toast("Producto agregado a carrito correctamente")
        }else{
            toast("Recuerda loguearte para guardar productos en tu carrito")
        }
    }
  return (
    <div>

        <button type="button" class="btn btn-primary" onClick={agregarCarrito}> Agregar Carrito</button>
        <button type="button" class="btn btn-primary" onClick={sumar}>+</button>
        <span>Cantidad Elegida {cantidad}</span>
        <button type="button" class="btn btn-primary" onClick={restar}>-</button>
        
        
    </div>
  )
}
