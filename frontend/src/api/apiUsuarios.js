// Importa la librería Axios
import axios from 'axios';
import Cookies from "js-cookie"


const backendUrl = process.env.REACT_APP_URL_BACKEND

const csrftoken = Cookies.get('csrftoken')

const apiUsuarios = axios.create({
    baseURL: backendUrl
});
export const crearClientes = (data)=>{
    return apiUsuarios.post('api/clientes/agregar/',data, {
        headers: {
            'X-CSRFToken': csrftoken,
            'Content-Type': 'application/json',
        }
    });
}
export const consultarCliente = (token)=>{

    return apiUsuarios.get('api/clientes/consultar/',{
        headers:{
            Authorization:`Bearer ${token}`,

        }
    });
}
export const loginCliente = (data)=>{

    return apiUsuarios.post('api/clientes/loguearse/', data, {
        headers: {
            'X-CSRFToken': csrftoken,
            'Content-Type': 'application/json',
        }
    });
};