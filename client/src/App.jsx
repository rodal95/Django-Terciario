import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import { Home } from './pages/home/home'
import './App.css'
import { User } from './pages/user/User'
import { Login } from './pages/login/Login'
import { Cart } from './pages/cart/cart'
import ProductDetail from './pages/productDetail/ProductDetail'
import {Toaster} from 'react-hot-toast'
import { Register } from './pages/register/Register'

export default function App() {


  return (

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/cliente' element={<Login/>}/>
          <Route path='/carrito' element={<Cart/>}/>
          <Route path='/clienteLog' element={<User/>}/>
          <Route path='/registrarse' element={<Register/>}/>
          <Route path='/detalle/:id' element={<ProductDetail/>}/>
        </Routes>
        <Toaster/>
      </BrowserRouter>



  )
}


