import { useEffect, useState } from "react"
import { consultarProductos } from "../../api/apiProductos"
import { ProductCard } from "../../components/ProductCard"
import { ProductList } from "../../components/ProductList"
export function Home() {
  const [productos, setProductos] = useState()
  useEffect(() => {
    async function traerProductos(){
      const response = await consultarProductos()
      setProductos(response.data)
    }
    traerProductos()
  }, [])
  

  return (
    <div>
      {productos ? <ProductList productos = {productos}/> : (
        <h1>Cargando...</h1>
      )}
    </div>
  );
}