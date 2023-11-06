import { useEffect, useState } from "react"
import { consultarProductos } from "../../api/apiProductos"
import { ProductCard } from "../../components/ProductCard"
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
      {productos ? (
        productos.map((producto) => (
          <ProductCard  producto={producto} />
        ))
      ) : (
        <h1>Cargando...</h1>
      )}
    </div>
  );
}