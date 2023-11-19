import React from 'react'

export default function UserData({cliente}) {
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
    </div>
  )
}
