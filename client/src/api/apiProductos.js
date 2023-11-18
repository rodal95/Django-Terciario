// Importa la librería Axios
import axios from 'axios';
const backendUrl = import.meta.env.VITE_BACKEND_URL
// Crea una instancia de Axios con la URL base
const apiProductos = axios.create({
    baseURL: backendUrl
});

export const consultarProductos = ()=>{
    return apiProductos.get("api/productos/all/");
}

export const consultarProducto = (id)=>{
    return apiProductos.get(`api/productos/getById/${id}/`);
}

export const consultarProductoCategoria = (categoria)=>{
    return apiProductos.get(`api/productos/getByCategory/${categoria}`);
}