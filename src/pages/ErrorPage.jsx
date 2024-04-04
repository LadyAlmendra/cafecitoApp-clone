import React from 'react';
import Footer from '../components/Footer/Footer';
import { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Link } from 'react-router-dom';

const setPageTitle = (title) => {
  document.title = title;
};

const ErrorPage = () => {

  useEffect(() => {
    setPageTitle('Pagina no encontrada');
  }, []);

  return (
    <>
      <Navbar />
      <div className='errorPage box'>
        <h1 className='title'>
          ERROR 404
        </h1>
        <h2>
          Pagina no encontrada
        </h2>
        <Link className="link" to="/">Volver a inicio</Link>
      </div>
      <Footer />
    </>
  )
}

export default ErrorPage;
