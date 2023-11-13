import React from 'react'

export default function UserData({cliente}) {
  return (
    <div>
        <h1>Datos de usuario</h1>
        <h2>Nombre: {cliente.nombre}</h2>
        <h2>Apellido: {cliente.apellido}</h2>
        <h2>Correo: {cliente.correo}</h2>
        <h2>Telefono: {cliente.telefono}</h2>
    </div>
  )
}
