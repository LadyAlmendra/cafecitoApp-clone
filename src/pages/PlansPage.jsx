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
      <h3>Page Plans</h3>
      
    </main>
  )
}

export default PlansPage;
