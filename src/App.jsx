import { RouterProvider } from 'react-router-dom';
import Router from './router/Router';
import axios from 'axios';
import { useState, useEffect } from 'react';

const App = () => {
  const server = import.meta.env.VITE_MERCADOPAGO_URL;
  const [serverStatus, setServerStatus] = useState('');

  const checkServerStatus = async () => {
    console.log("Haciendo petición al servidor:", server);
    try {
      const response = await axios.get(server);
      console.log("Respuesta recibida del servidor:", response); 

      if ([200, 204, 304].includes(response.status)) {
        setServerStatus('El servidor está en línea');
      } else {
        setServerStatus('El servidor está en línea pero devuelve un estado diferente a 200');
      }
    } catch (error) {
      console.log("Error al conectar con el servidor:", error); 
      setServerStatus('Error al conectar con el servidor');
    }
  };

  useEffect(() => {
    checkServerStatus();
  }, []);

  useEffect(() => {
    console.log("Estado del servidor:", serverStatus); 
  }, [serverStatus]);

  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
};

export default App;