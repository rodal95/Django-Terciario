// Importa la librería Axios
import axios from 'axios';

// Crea una instancia de Axios con la URL base
const apiCarritos = axios.create({
  baseURL: 'http://localhost:8000/carritos/'
});

export const agregarProductoCarrito = (data,token)=>{
    return apiCarritos.post('agregarcarrito/',data,{headers:{Authorization:`Bearer ${token}`}});
}

export const consultarCarrito = (token)=>{
    return apiCarritos.get('carritoId/',{headers:{Authorization:`Bearer ${token}`}}) 
}

