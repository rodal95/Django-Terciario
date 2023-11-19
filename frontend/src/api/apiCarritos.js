// Importa la librería Axios
import axios from 'axios';
import Cookies from "js-cookie"

const csrftoken = Cookies.get('csrftoken')

const backendUrl = process.env.REACT_APP_URL_BACKEND
// Crea una instancia de Axios con la URL base
const apiCarritos = axios.create({
  baseURL: backendUrl
});

export const agregarProductoCarrito = (data,token)=>{
    return apiCarritos.post('api/carritos/agregarCarrito/',data,{
      headers:{
        Authorization:`Bearer ${token}`,
        'X-CSRFToken': csrftoken,
        'Content-Type': 'application/json',
      }
    });
}

export const consultarCarrito = (token)=>{
    return apiCarritos.get('api/carritos/carritosId/',{headers:{Authorization:`Bearer ${token}`}}) 
}

export const eliminarCarrito = (token)=>{
  return apiCarritos.get('api/carritos/eliminarCarrito/',{headers:{Authorization:`Bearer ${token}`}})
}