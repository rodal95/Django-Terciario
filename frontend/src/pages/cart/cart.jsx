import { useState, useEffect } from "react"
import { consultarCarrito } from "../../api/apiCarritos"
import Cookies from "js-cookie"
import toast from "react-hot-toast"
import { ProductosCart } from "../../components/ProductosCart"
import { agregarProductoCarrito, eliminarCarrito } from '../../api/apiCarritos';
import { crearPedido } from "../../api/apiPedidos"
export function Cart() {
  const [token, setToken]=useState(null)
  const [productos,setProductos]=useState([])
  const [loading, setLoading] = useState(true);
  const tokenCookie = Cookies.get('access_token')
  const [total, setTotal] = useState(0);

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
  useEffect(() => {
    // Calcular el total cada vez que cambie la lista de productos
    const nuevoTotal = productos.reduce(
      (acc, producto) => acc + producto.precio * producto.cantidad,
      0
    );
    setTotal(nuevoTotal);
  }, [productos]);


  async function ObtenerProductos(token){
    const response = await consultarCarrito(token)
    setLoading(false);
    if(response.data){
      console.log(response.data)
      setProductos(response.data)
      setLoading(false);
      
    }else{
      toast.error("No se pudo obtener el carrito")
    }
  }  
  const actualizarTotal = async (id_producto, cambio) => {
    try {
      // Actualizar la cantidad del producto
      await agregarProductoCarrito({ 'id_producto': id_producto, 'cantidad': cambio }, token);
      // Volver a obtener los productos para reflejar los cambios
      ObtenerProductos(token);
    } catch (error) {
      console.error("Error al actualizar la cantidad del producto:", error);
      toast.error("Error al actualizar la cantidad del producto");
    }
  };
  const finalizarPedido= async ()=>{
    const response = await crearPedido(token)
    console.log(response.data)
    toast.success("Pedido creado correctamente")
    setTimeout(()=>{
      window.location.href = "/cliente"
    },2000)
  }
  const limpiarCarrito=async ()=>{
    const response = await eliminarCarrito(token)
    console.log(response.data)
    toast.success("Carrito eliminado correctamente")
    
      
  }
  return (
    <>
      <div>
        <h1>Carrito</h1>
        {token ? (
          <>
            {loading ? (
              <h2>Cargando productos...</h2>
            ) : productos.length > 0 ? (
              <>
                <h2>Productos en el carrito</h2>
                <ul>
                  {productos.map((producto) => (
                    <ProductosCart key={producto.id_producto} producto={producto} actualizarTotal={actualizarTotal} />
                  ))}
                </ul>
                <h1>Total:$ {Number(total).toFixed(2)} pesos</h1>
                <button type="button" className="btn btn-primary" onClick={finalizarPedido}>Finalizar Pedido</button>
                <button type="button" className="btn btn-danger" onClick={limpiarCarrito}>Borrar Carrito</button>
              </>
            ) : (
              <h2>No hay productos en el carrito</h2>
            )}
          </>
        ) : (
          <h2>Recuerda iniciar sesión para ver tu carrito</h2>
        )}
      </div>
    </>
  );
}

