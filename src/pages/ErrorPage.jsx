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
    setPageTitle('Café Toxic - Pagina no encontrada');
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <section>
          <div className='errorPage box'>
            <h1 className='title'>
              ❌ <br />
              ERROR 404
            </h1>
            <h2>
              Pagina no encontrada
            </h2>
            <Link className="link" to="/">Volver a inicio</Link>
          </div>

        </section>
      </main>
      <Footer />
    </>
  )
}

export default ErrorPage;
