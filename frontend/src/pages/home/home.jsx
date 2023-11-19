import { useEffect, useState } from "react"
import { consultarProductos } from "../../api/apiProductos"
import { ProductCard } from "../../components/ProductCard"
import { ProductList } from "../../components/ProductList"
export function Home() {
  const [productos, setProductos] = useState()
  useEffect(() => {
    async function traerProductos(){
      try{
        const response = await consultarProductos()
      setProductos(response.data)
      }
      catch(error){
        console.log("error en traer productos", error)
      }
      
    }
    traerProductos()
  }, [])
  

  return (
    <div>
      <h1>Un cambio</h1>
      {productos ? <ProductList productos = {productos}/> : (
        <h1>Cargando...</h1>
      )}
    </div>
  );
}