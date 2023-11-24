import React from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { crearClientes } from '../../api/apiUsuarios';
import "./Register.css"

export function Register() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = (data) => {
    if(data.password == data.confirmPassword){
      const cliente = {"nombre":data.firstName, "apellido":data.lastName, "dni":data.dni,"telefono":data.phone, "correo":data.email, "contraseña":data.password}
      registrarCliente(cliente)
    }else{
      toast.error("Las contraseñas no coinciden")
    }
  };
  async function registrarCliente(data){
    await crearClientes(data)
    toast.success("Registro exitoso")
    setTimeout(()=>{
      window.location.href="/cliente"
    },1500)
    
  }

  return (
    <div className='container-form-signup'>
      <form onSubmit={handleSubmit(onSubmit)} className='form-signup'>
        <div>
          <label className="form-control form-control-lg" htmlFor="firstName">Nombre</label>
          <input className="form-control form-control-lg" type="text" id="firstName" placeholder='Ingrese su nombre' {...register("firstName", { required: true })} />
          {errors.firstName && <span>Este Campo es requerido</span>}
        </div>
        <div>
          <label className="form-control form-control-lg" htmlFor="lastName">Apellido</label>
          <input className="form-control form-control-lg" type="text" id="lastName" placeholder='Ingrese su apellido' {...register("lastName", { required: true })} />
          {errors.lastName && <span>Este Campo es requerido</span>}
        </div>
        <div>
          <label className="form-control form-control-lg" htmlFor="dni">DNI</label>
          <input className="form-control form-control-lg" type="number" id="dni" placeholder='Ingrese su dni' {...register("dni", { required: true })} />
          {errors.dni && <span>Este Campo es requerido</span>}
        </div>
        <div>
          <label className="form-control form-control-lg" htmlFor="phone">Telefono</label>
          <input className="form-control form-control-lg" type="number" id="phone" placeholder='Ingrese su telefono' {...register("phone", { required: true })} />
          {errors.phone && <span>Este Campo es requerido</span>}
        </div>
        <div>
          <label className="form-control form-control-lg" htmlFor="email">Correo</label>
          <input className="form-control form-control-lg" type="email" id="email" placeholder='Ingrese su correo' {...register("email", { required: true })} />
          {errors.email && <span>Este Campo es requerido</span>}
        </div>
        <div>
          <label className="form-control form-control-lg" htmlFor="password">Contraseña</label>
          <input className="form-control form-control-lg" type="password" id="password" placeholder='Ingrese su contraseña' {...register("password", { required: true })} />
          {errors.password && <span>Este Campo es requerido</span>}
        </div>
        <div>
          <label className="form-control form-control-lg" htmlFor="confirmPassword">Repetir contraseña</label>
          <input className="form-control form-control-lg" type="password" id="confirmPassword" placeholder='Confirme su contraseña' {...register("confirmPassword", { required: true })} />
          {errors.confirmPassword && <span>Este Campo es requerido</span>}
        </div>
        <div>
          <button class="btn btn-primary" type="submit">Registrarse</button><br/>
          <a href="/cliente">Ya tenes cuenta? Inicia sesion</a>
        </div>
        
      </form>
    </div>
  )
}
