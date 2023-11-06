// Importa la librería Axios
import axios from 'axios';

// Crea una instancia de Axios con la URL base
const apiProductos = axios.create({
  baseURL: 'http://localhost:8000/productos/'
});

export const consultarProductos = ()=>{

    return apiProductos.get("all/");
}

export const consultarProducto = (id)=>{
    return apiProductos.get(`getById/${id}`);
}

export const consultarProductoCategoria = (categoria)=>{
    return apiProductos.get(`getByCategory/${categoria}`);
}