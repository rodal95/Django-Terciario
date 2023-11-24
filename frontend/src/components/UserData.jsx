import React from 'react'
import Cookies from "js-cookie"
import toast from 'react-hot-toast';

export default function UserData({cliente}) {
  const deslogueo = ()=>{
    Cookies.remove('access_token')
    toast("Deslogueo exitoso")
    setTimeout(()=>{
      window.location.href = "/cliente"
    },1500)    
  }
  return (
    <div>
      <table className='table'>
        <tbody className="table-group-divider">
          <tr>
            <td>Nombre:</td>
            <td>{cliente.nombre}</td>
          </tr>
          <tr>
            <td>Apellido:</td>
            <td>{cliente.apellido}</td>
          </tr>
          <tr>
            <td>Correo:</td>
            <td>{cliente.correo}</td>
          </tr>
          <tr>
            <td>Telefono:</td>
            <td>{cliente.telefono}</td>
          </tr>
        </tbody>
      </table>
      <button type="button" class="btn btn-primary" onClick={()=>{deslogueo()}}>Salir</button>
    </div>
  )
}
