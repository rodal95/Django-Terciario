import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function AuthChecker({ children }) {


  useEffect(() => {
    const token = Cookies.get('access_token');
    if (!token) {
      toast("Recuerda loguearte para agregar productos al carrito");
    }
  }, []);

  return children;
}

