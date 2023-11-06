// Importa la librería Axios
import axios from 'axios';

// Crea una instancia de Axios con la URL base
const apiUsuarios = axios.create({
  baseURL: 'http://localhost:8000/clientes/'
});

export const crearClientes = (data)=>{
    return apiUsuarios.post('agregar/',data);
}

export const consultarCliente = (token)=>{

    return apiUsuarios.get('consultar/',{headers:{Authorization:`Bearer ${token}`}});
}

export const loginCliente = (data)=>{
    return apiUsuarios.post('login/',data);
}