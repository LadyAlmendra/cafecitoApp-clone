import { useEffect } from 'react';

const setPageTitle = (title) => {
  document.title = title;
};

const PlansPage = () => {

  useEffect(() => {
    setPageTitle('LadyToxic - Planes');
  }, []);

  return (
    <main>
      <section>
        <div className='box plans'>
          <h3>¿Qué vas a hacer está noche?</h3>
          <p>¡Lo mismo que todas las noches Piky! Tratar de Dominar el mundo.</p>
        </div>
        <div className='box plans'>
          <h3>Ser una gata Pelirroja</h3>
          <p>Para dormir arriba de los muebles, ser suprema y dominar el mundo.</p>
        </div>
      </section>
    </main>
  )
}

export default PlansPage;
