import {RouterProvider} from 'react-router-dom';
import Router from './router/Router';
import axios from 'axios';
import { useState, useEffect } from 'react';

const App = () => {
  const [serverStatus, setServerStatus] = useState('');

  const checkServerStatus = async () => {
    try {
      const response = await axios.get(import.meta.env.VITA_MERCADOPAGO_URL); 
      if (response.status === 200) {
        setServerStatus('El servidor está en línea');
      } else {
        setServerStatus('El servidor está en línea pero devuelve un estado diferente a 200');
      }
    } catch (error) {
      setServerStatus('Error al conectar con el servidor');
    }
    console.log(serverStatus)
  };

  useEffect(() => {
    checkServerStatus();
  }, []);
  return (
    <>
      <RouterProvider router={Router} />
    </>
  )
}

export default App
