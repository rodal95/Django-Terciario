
import { useEffect, useState } from "react";
import { consultarProductos, consultarCategorias } from "../../api/apiProductos";
import { ProductList } from "../../components/ProductList";
import { Carousel } from "../../components/Carousel";
import "./home.css";
import { Informacion } from "../../components/Informacion";
export function Home() {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchText, setSearchText] = useState("");
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    async function traerProductos() {
      try {
        const response = await consultarProductos();
        const response2 = await consultarCategorias();
        setProductos(response.data);
        setCategorias(response2.data);
        setLoading(false)
      } catch (error) {
        console.log("error en traer productos", error);
      }
    }
    traerProductos();
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const filteredProductos = productos.filter((producto) => {
    const categoryMatch = selectedCategory ? producto.categoria == selectedCategory : true;
    const searchTextMatch = searchText
      ? producto.nombre.toLowerCase().includes(searchText.toLowerCase())
      : true;
  
    return categoryMatch && searchTextMatch;
  });

  return (
    <div>
      <div className="filtros">
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">Todas las Categorias</option>
          {categorias.map((categoria) => (
            <option key={categoria.id_categoria} value={categoria.id_categoria}>
              {categoria.nombre}
            </option>
          ))}
        </select>
        <input type="text" value={searchText} onChange={handleSearchTextChange} placeholder="Buscar productos" />
      </div>
      <Carousel />
      <Informacion/>
      {!loading ? 
        <>
          {filteredProductos.length > 0 ? (
            <ProductList productos={filteredProductos} />
          ) : (
            <h1>No se encuentran productos</h1>
          )}
        </>:
        <div style={{height:"500px"}}>
          <button class="btn btn-primary" type="button" disabled>
            <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
            <span role="status">Cargando, aguarde por favor...</span>
          </button>
        </div>
      
    }
      
    </div>
  );
}

