import { useState, useEffect } from "react"
import Cookies from "js-cookie"
import toast from "react-hot-toast"

export  function User() {
  const [token, setToken]=useState(null)
  const tokenCookie = Cookies.get('access_token')

  useEffect(()=>{
      if(tokenCookie){
          setToken(tokenCookie)
      }else{
        setTimeout(()=>{
          window.location.href = "/"
        },2000)
      }
  }
  ,[])

  return (
    <>
    {token ? (
      <div>
        <h1>User</h1>
    </div>) :  <h1>Recuerda loguearte para acceder a tu usuario</h1>}
    </>
  )
}

