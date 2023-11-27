import React, { useEffect, useState } from 'react'
import { agregarProductoCarrito } from '../api/apiCarritos';
import Cookies from 'js-cookie';
import {toast} from 'react-hot-toast'

export default function Botonera({producto}) {
    const [cantidad,setCantidad]= useState(1)
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
        if(cantidad > 1)
        setCantidad(cantidad - 1);
    }
    const agregarCarrito = async () => {
        if (token) {
            const data = {
                "id_producto": producto.id_producto,
                "cantidad": cantidad
            }
            await agregarProductoCarrito(data, token)
            toast("Producto agregado a carrito correctamente")
        } else {
            const carritoLocal = JSON.parse(localStorage.getItem('carritoLocal')) || [];
            const productoEnCarrito = carritoLocal.find(item => item.id_producto === producto.id_producto);
            if (productoEnCarrito) {
                productoEnCarrito.cantidad += cantidad;
            } else {
                carritoLocal.push({
                    id_producto: producto.id_producto,
                    nombre: producto.nombre,
                    precio: producto.precio,
                    cantidad: cantidad
                });
            }
            localStorage.setItem('carritoLocal', JSON.stringify(carritoLocal));
            toast("Producto agregado al carrito local correctamente");
        }
    }
  return (
    <div>
        <button type="button" className="btn btn-primary" onClick={agregarCarrito}> Agregar Carrito</button>
        <button type="button" className="btn btn-primary" onClick={restar}>-</button>
        <button type="button" className="btn btn-primary" onClick={sumar}>+</button>
        <span>Cantidad: {cantidad}</span>
    </div>
  )
}
