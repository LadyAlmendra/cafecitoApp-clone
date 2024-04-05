import { useEffect, useState } from 'react';
import {collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config.js';

const setPageTitle = (title) => {
  document.title = title;
};

const PlansPage = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {

    setPageTitle('LadyToxic - Planes');

    const PlansRef = collection(db, 'Plans');
    getDocs(PlansRef)
      .then((querySnapshot) => {
        const plansData = querySnapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id }
        });
        setPlans(plansData);
      })
  }, [])

  return (
    <main>
      <section>
        {plans.map((plans) => (
          <div className='box plans' key={plans.id}>
            <h3>{plans.title}</h3>
            <p>{plans.content}</p>
          </div>
        ))}

      </section>
    </main>
  )
}

export default PlansPage;
