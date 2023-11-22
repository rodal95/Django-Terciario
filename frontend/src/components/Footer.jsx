import React from 'react'
import "./Footer.css"
export function Footer() {
  return (
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
            <div class="footer-section about">
                <h2>Sobre Nosotros</h2>
                <p>Somos una librería comprometida con la difusión del conocimiento...</p>
            </div>
            <div class="footer-section links">
               {/*  <h2>Enlaces Útiles</h2>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Catálogo</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul> */}
                <img src="https://i.imgur.com/5qQjrSv.png" alt="" className='logo-footer'/>
            </div>
            <div class="footer-section contact">
                <h2>Contacto</h2>
                <span ><i class="fas fa-phone"></i> 123-456-789</span>
                <span><i class="fas fa-envelope"></i> info@mi-libreria.com</span>
            </div>
            </div>
        </div>
    </footer>
  )
}
