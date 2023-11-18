// Importa la librería Axios
import axios from 'axios';
const backendUrl =import.meta.env.VITE_BACKEND_URL
console.log(backendUrl)
// Crea una instancia de Axios con la URL base
const apiPedidos = axios.create({
  baseURL: backendUrl
});

export const consultarPedidos = (token)=>{
    return apiPedidos.get('api/pedidos/pedidosId/',{headers:{Authorization:`Bearer ${token}`}});
}

export const crearPedido = (token)=>{
    return apiPedidos.get('api/pedidos/finalizarPedido/',{headers:{Authorization:`Bearer ${token}`}});
}
