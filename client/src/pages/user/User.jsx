import { useState, useEffect } from "react"
import Cookies from "js-cookie"
import { consultarCliente } from "../../api/apiUsuarios"
import UserData from "../../components/UserData"
import UserPedidosData from "../../components/UserPedidosData"
import UserContactData from "../../components/UserContactData"
export  function User() {
  const [token, setToken]=useState(null)
  const [cliente, setCliente]=useState(null)
  const tokenCookie = Cookies.get('access_token')

  useEffect(()=>{
      if(tokenCookie){
          setToken(tokenCookie)
          traerCliente()
      }else{
        setTimeout(()=>{
          window.location.href = "/login"
        },2000)
      }
  }
  ,[])
  async function traerCliente(){
    const response =await  consultarCliente(tokenCookie)
          setCliente(response.data)
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
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Contacto</button>
          </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
          <UserData cliente={cliente}/>
        </div>
        <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
          <UserPedidosData />
        </div>
        <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
          <UserContactData />
        </div>
      </div></>:<h1>Cargando</h1>}
    </div>) :  <h1>Recuerda loguearte para acceder a tu usuario</h1>}
    </>
  )
}

