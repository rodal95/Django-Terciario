import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Navbar} from './components/Navbar'
import { Home } from './pages/home/home'
import './App.css'
import { User } from './pages/user/User'
import { Cart } from './pages/cart/cart'

function App() {


  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/cliente' element={<User/>}/>
          <Route path='/carrito' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
