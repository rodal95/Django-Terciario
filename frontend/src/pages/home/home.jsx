
import { useEffect, useState } from "react";
import { consultarProductos, consultarCategorias } from "../../api/apiProductos";
import { ProductCard } from "../../components/ProductCard";
import { ProductList } from "../../components/ProductList";

export function Home() {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    async function traerProductos() {
      try {
        const response = await consultarProductos();
        const response2 = await consultarCategorias();
        setProductos(response.data);
        setCategorias(response2.data);
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
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        {categorias.map((categoria) => (
          <option key={categoria.id_categoria} value={categoria.id_categoria}>
            {categoria.nombre}
          </option>
        ))}
      </select>
      <input type="text" value={searchText} onChange={handleSearchTextChange} placeholder="Search products" />
      {filteredProductos.length > 0 ? (
        <ProductList productos={filteredProductos} />
      ) : (
        <h1>No products found.</h1>
      )}
    </div>
  );
}

