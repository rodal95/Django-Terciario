import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Navbar} from './components/Navbar'
import { Home } from './pages/home/home'
import './App.css'
import { User } from './pages/user/User'
import { Login } from './pages/login/Login'
import { Cart } from './pages/cart/cart'
import ProductDetail from './pages/productDetail/ProductDetail'
import {Toaster} from 'react-hot-toast'

export default function App() {


  return (

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/cliente' element={<User/>}/>
          <Route path='/carrito' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/producto/:id' element={<ProductDetail/>}/>
        </Routes>
        <Toaster/>
      </BrowserRouter>



  )
}


