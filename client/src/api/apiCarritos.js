// Importa la librería Axios
import axios from 'axios';

// Crea una instancia de Axios con la URL base
const apiCarritos = axios.create({
  baseURL: 'http://localhost:8000/carritos/'
});

export const agregarProductoCarrito = (data,token)=>{
    return apiCarritos.post('agregarCarrito/',data,{headers:{Authorization:`Bearer ${token}`}});
}

export const consultarCarrito = (token)=>{
    return apiCarritos.get('carritosId/',{headers:{Authorization:`Bearer ${token}`}}) 
}

