import React from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { crearClientes } from '../../api/apiUsuarios';

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
    })
    
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="form-control form-control-lg" htmlFor="firstName">First Name</label>
        <input className="form-control form-control-lg" type="text" id="firstName" {...register("firstName", { required: true })} />
        {errors.firstName && <span>Este Campo es requerido</span>}
      </div>
      <div>
        <label className="form-control form-control-lg" htmlFor="lastName">Last Name</label>
        <input className="form-control form-control-lg" type="text" id="lastName" {...register("lastName", { required: true })} />
        {errors.lastName && <span>Este Campo es requerido</span>}
      </div>
      <div>
        <label className="form-control form-control-lg" htmlFor="dni">DNI</label>
        <input className="form-control form-control-lg" type="number" id="dni" {...register("dni", { required: true })} />
        {errors.dni && <span>Este Campo es requerido</span>}
      </div>
      <div>
        <label className="form-control form-control-lg" htmlFor="phone">Phone</label>
        <input className="form-control form-control-lg" type="number" id="phone" {...register("phone", { required: true })} />
        {errors.phone && <span>Este Campo es requerido</span>}
      </div>
      <div>
        <label className="form-control form-control-lg" htmlFor="email">Email</label>
        <input className="form-control form-control-lg" type="email" id="email" {...register("email", { required: true })} />
        {errors.email && <span>Este Campo es requerido</span>}
      </div>
      <div>
        <label className="form-control form-control-lg" htmlFor="password">Password</label>
        <input className="form-control form-control-lg" type="password" id="password" {...register("password", { required: true })} />
        {errors.password && <span>Este Campo es requerido</span>}
      </div>
      <div>
        <label className="form-control form-control-lg" htmlFor="confirmPassword">Confirm Password</label>
        <input className="form-control form-control-lg" type="password" id="confirmPassword" {...register("confirmPassword", { required: true })} />
        {errors.confirmPassword && <span>Este Campo es requerido</span>}
      </div>
      <button class="btn btn-primary" type="submit">Registrarse</button>
    </form>
  )
}
