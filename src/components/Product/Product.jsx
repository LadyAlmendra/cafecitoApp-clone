import './Product.css';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { useState } from 'react';
import axios from 'axios';

const Product = () => {
  initMercadoPago('YOUR_PUBLIC_KEY', {
    locale: 'es-AR'
  });
  const [value, setValue] = useState(1);
  const [preferenceId, setPreferenceId] = useState(null)

  const createPreference = async () => {
    try {
      const response = await axios.post('', {
        title: "Cafecito Toxic",
        quantity: value,
        price: 5 * value
      });
      const { id } = response.data;
      return id;

    } catch (error) {
      console.log(error)
    }
  }

  const handleIncrement = () => {
    setValue(prevValue => prevValue + 1);
  };
  const handleDecrement = () => {
    setValue(prevValue => (prevValue > 1 ? prevValue - 1 : prevValue));
  };

  const handleChange = event => {
    setValue(parseInt(event.target.value));
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id)
    }
  }

  return (
    <>
      <div className='box card-tips'>
        <h4>
          ¡Ayúdame con un café Toxic!
        </h4>
        <div className="input-container-tips">
          ☕ x
          <div className="quantity">
            <button className="btn" onClick={handleDecrement}>-</button>
            <input type="text"
              value={value}
              onChange={handleChange} placeholder='1' readOnly
            />
            <button className="btn" onClick={handleIncrement}>+</button>
          </div>
        </div>
        <div className='form'>
          <input type="text" placeholder='Nombre (opcional)' />
          <input type="text" placeholder="Contacto (opcional, campo oculto al público)" />
          <textarea cols="50" placeholder='Mensaje (opcional)'>

          </textarea>
          <hr />
          <p>Invitame {value} Cafecito (ARS ${5 * value},00)</p>
          <button className='buy-mercadopago' onClick={handleBuy}>MercadoPago</button>
          {preferenceId &&
            <Wallet initialization={{ preferenceId: preferenceId }} customization={{ texts: { valueProp: 'smart_option' } }} />
          }
        </div>
      </div>
    </>
  )
}

export default Product;
