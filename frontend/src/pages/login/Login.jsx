import React,{useEffect} from 'react'
import { useForm } from "react-hook-form"
import { loginCliente } from '../../api/apiUsuarios';
import "./Login.css"
import Cookies from "js-cookie"
import toast from 'react-hot-toast';


export function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  useEffect(() => {
    const token = Cookies.get('access_token');
    if (token) {
      window.location.href = "/clienteLog";
    }
  }, []);
  const onSubmit = handleSubmit((data) => {
    Logueo(data)
  });
  async function Logueo(data){
    const datos = {'correo':data.correo,'contraseña':data.contraseña}
    const response = await loginCliente(datos)
    if (response.data.token) {
      Cookies.set('access_token', response.data.token, { expires: 1 / 24 });
      toast("Logueo exitoso")
      setTimeout(()=>{
        window.location.href = "/clienteLog"
      },2000)


    }
  }
  
  return (
    <div className='container-form-login'>
      <h1>Iniciar Sesion</h1>
      <form onSubmit={onSubmit} className='form-login'>
        <div>
          <label className="form-control form-control-lg" htmlFor="email">Email</label>
          <input className="form-control form-control-lg" type="email" id="email" placeholder='Ingrese su correo' {...register("correo", { required: true })} />
          {errors.correo && <span>This field is required</span>}
        </div>
        <div>
          <label className="form-control form-control-lg" htmlFor="password">Password</label>
          <input className="form-control form-control-lg" type="password" id="password" placeholder='Ingrese su Contraseña' {...register("contraseña", { required: true })} />
          {errors.contraseña && <span>This field is required</span>}
        </div>
        <div>
          <a href = "/registrarse">No tenes cuenta? Registrate aqui</a><br/>
          <button type="submit" class="btn btn-primary">Ingresar</button>
        </div>
        
        
      </form>
    </div>
  )
}
