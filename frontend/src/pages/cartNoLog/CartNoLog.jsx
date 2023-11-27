import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Cookies from 'js-cookie';
import {ProductosCartNoLog} from "../../components/ProductosCartNoLog"
import { useForm } from 'react-hook-form';
import { crearClientes , loginCliente} from '../../api/apiUsuarios';
import { agregarProductoCarrito } from '../../api/apiCarritos';
import toast from 'react-hot-toast';
export function CartNoLog() {
  const tokenCookie = Cookies.get('access_token');
  const [carritoLocal, setCarritoLocal] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    if (tokenCookie) {
      window.location.href = '/carrito';
    } else {
      const carrito = JSON.parse(localStorage.getItem('carritoLocal'));
      setCarritoLocal(carrito || []);
    }
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const finalizarPedido = async () => {
    setShowModal(true);
    // Aquí puedes incluir la lógica para finalizar el pedido si es necesario
  };

  const onSubmit = (data) => {
    if(data.password == data.confirmPassword){
      const cliente = {"nombre":data.firstName, "apellido":data.lastName, "dni":data.dni,"telefono":data.phone, "correo":data.email, "contraseña":data.password}
      console.log(cliente)
      handleCloseModal()
      registrarCliente(cliente)
    }else{
      toast.error("Las contraseñas no coinciden")
      handleCloseModal()
    }
  };
  async function registrarCliente(data){
    await crearClientes(data)
    const usuarioLog = {"correo":data.correo, "contraseña":data.contraseña}
    const response = await loginCliente(usuarioLog)
    const token = response.data.token
    Cookies.set('access_token', response.data.token, { expires: 1 / 24 });
    carritoLocal.map(async (producto) => {
        const data = {
            "id_producto": producto.id_producto,
            "cantidad": producto.cantidad
        }
        await agregarProductoCarrito(data, token)
    })
    localStorage.removeItem('carritoLocal')
    toast.success("Registro exitoso")
    setTimeout(()=>{
      window.location.href="/carrito"
    },1500)
    
  }

  return (
    <div>
      {carritoLocal.length > 0 ? (
        carritoLocal.map((producto, index) => (
          <ProductosCartNoLog key={index} producto={producto} />
        ))
      ) : (
        <div style={{ height: "400px" }}>
          <h1>No hay productos en el carrito</h1>
        </div>
      )}

      {/* Botón para finalizar el pedido */}
      {carritoLocal.length > 0 && (
        <button className='btn btn-primary' onClick={finalizarPedido}>Finalizar Pedido</button>
      )}

      {/* Modal para el formulario de registro */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Formulario de Registro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>

        </Modal.Footer>
      </Modal>
    </div>
  );

}
