import { useState, useEffect } from "react"
import { consultarCarrito } from "../../api/apiCarritos"
import Cookies from "js-cookie"
import toast from "react-hot-toast"
import { ProductosCart } from "../../components/ProductosCart"
export function Cart() {
  const [token, setToken]=useState(null)
  const [productos,setProductos]=useState([])
  const tokenCookie = Cookies.get('access_token')

  useEffect(()=>{
      if(tokenCookie){
          setToken(tokenCookie)
          ObtenerProductos(tokenCookie)
      }else{
        toast("recuerda loguearte para ver tu carrito")
        setTimeout(()=>{
          window.location.href = "/"
        },2000)

      }
  }
  ,[])
  async function ObtenerProductos(token){
    const response = await consultarCarrito(token)
    if(response.data){
      console.log(response.data)
      setProductos(response.data)
    }else{
      toast.error("No se pudo obtener el carrito")
    }
  }
  return (
    <>
      {token ? (
        productos.length > 0 ? (
          <div>
            <h1>Cart</h1>
            <h2>Productos en el carrito</h2>
            <ul>
              {productos.map((producto) => (
                <ProductosCart key={producto.id} producto={producto} />
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <h1>Cart</h1>
            <h2>No hay productos en el carrito</h2>
          </div>
        )
      ) : (
        <div>
          <h1>Cart</h1>
          <h2>Recuerda iniciar sesión para ver tu carrito</h2>
        </div>
      )}
    </>
  );
}
