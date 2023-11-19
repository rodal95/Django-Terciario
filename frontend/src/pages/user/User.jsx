import { useState, useEffect } from "react"
import Cookies from "js-cookie"
import { consultarCliente } from "../../api/apiUsuarios"
import { consultarPedidos } from "../../api/apiPedidos"
import UserData from "../../components/UserData"
import UserPedidosData from "../../components/UserPedidosData"
export  function User() {
  const [token, setToken]=useState(null)
  const [cliente, setCliente]=useState(null)
  const [pedidos,setPedidos]=useState(null)
  const tokenCookie = Cookies.get('access_token')

  useEffect(()=>{
      if(tokenCookie){
          setToken(tokenCookie)
          traerCliente()
          traerPedidos()
      }else{
        setTimeout(()=>{
          window.location.href = "/cliente"
        },2000)
      }
  }
  ,[])
  async function traerCliente(){
    const response =await  consultarCliente(tokenCookie)
          setCliente(response.data)
  }
  async function traerPedidos(){
    const response = await  consultarPedidos(tokenCookie)
          setPedidos(response.data)
  }
  return (
    <>
    {token ? (
      <div>
        {cliente ?<>
        <h1>Bienvenido {cliente.nombre}</h1>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Datos</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Pedido</button>
          </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
          <UserData cliente={cliente}/>
        </div>
        <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
          {pedidos ? <UserPedidosData pedidos={pedidos}/>:<h1>No hay pedidos realizados</h1>}
          
        </div>

      </div></>:<h1>Cargando</h1>}
    </div>) :  <h1>Recuerda loguearte para acceder a tu usuario</h1>}
    </>
  )
}

