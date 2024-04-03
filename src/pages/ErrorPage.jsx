import React from 'react';
import Footer from '../components/Footer/Footer';
import { useEffect } from 'react';

const setPageTitle = (title) => {
  document.title = title;
};

const ErrorPage = () => {

  useEffect(() => {
    setPageTitle('Pagina no encontrada');
  }, []);

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
