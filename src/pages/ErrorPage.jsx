import React from 'react';
import Footer from '../components/Footer/Footer';

const ErrorPage = () => {
  return (
    <>
      <div className='errorPage'>
        <h1 className='title'>
          ERROR 404
        </h1>
        <h2>
          Pagina no encontrada
        </h2>
      </div>
      <Footer />
    </>
  )
}

export default ErrorPage;
