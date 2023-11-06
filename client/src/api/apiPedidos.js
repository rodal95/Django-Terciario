// Importa la librería Axios
import axios from 'axios';

// Crea una instancia de Axios con la URL base
const apiPedidos = axios.create({
  baseURL: 'http://localhost:8000/pedidos/'
});

export const consultarPedidos = (token)=>{
    return apiPedidos.get('pedidosId/',{headers:{Authorization:`Bearer ${token}`}});
}

export const crearPedido = (token)=>{
    return apiPedidos.post('finalizarPedido/',{headers:{Authorization:`Bearer ${token}`}});
}
