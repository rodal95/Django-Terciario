import React from 'react'
import { set, useForm } from "react-hook-form"
import { loginCliente } from '../../api/apiUsuarios';
import Cookies from "js-cookie"
import toast from 'react-hot-toast';


export function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = handleSubmit((data) => {
    Logueo(data)
  });
  async function Logueo(data){
    const datos = {'correo':data.correo,'contraseña':data.contraseña}

    const response = await loginCliente(datos)
    if (response.data.token) {
      // Almacenar el token en una cookie
      Cookies.set('access_token', response.data.token, { expires: 1 / 24 }); // Duración de 1 hora (1/24 de un día)
      toast("Logueo exitoso")
      setTimeout(()=>{
        window.location.href = "/cliente"
      },2000)

      // Realizar otras acciones después de guardar la cookie, como redirigir al usuario a una página de inicio
    }
  }

    


  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label className="form-control form-control-lg" htmlFor="email">Email</label>
          <input className="form-control form-control-lg" type="email" id="email" {...register("correo", { required: true })} />
          {errors.correo && <span>This field is required</span>}
        </div>
        <div>
          <label className="form-control form-control-lg" htmlFor="password">Password</label>
          <input className="form-control form-control-lg" type="password" id="password" {...register("contraseña", { required: true })} />
          {errors.contraseña && <span>This field is required</span>}
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
