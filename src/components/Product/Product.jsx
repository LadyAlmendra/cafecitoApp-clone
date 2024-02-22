import './Product.css';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { useState } from 'react';
import axios from 'axios';
import Swal  from 'sweetalert2';

const Product = () => {
  const UrlMercadopago = import.meta.env.VITE_MERCADOPAGO_URL;

  initMercadoPago(import.meta.env.VITE_PUBLIC_KEY, {
    locale: 'es-AR'
  });
  const [value, setValue] = useState(1);
  const [preferenceId, setPreferenceId] = useState(null)

  const URL = `${UrlMercadopago}/payment-mercadopago/create-order/`;

  const createPreference = async () => {
    try {
      const data = {
        items: [{
          id: 1234,
          title: "Cafe Toxic",
          quantity: value,
          unit_price: 5 * value
        }],
        back_urls: {
          success: `${import.meta.env.VITE_URL_REDIRECT}/success`,
          failure: `${import.meta.env.VITE_URL_REDIRECT}/failure`,
          pending: `${import.meta.env.VITE_URL_REDIRECT}/pending`,
        }
      };

      const response = await axios.post(URL, data);
      const id = response.data.preferenceId;
      console.log(id)
      return id

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
      })
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
          <textarea cols="50" placeholder='Mensaje (opcional)'></textarea>
          <hr />
          <p className='inv'>Invitame {value} Cafecito Toxic (ARS ${5 * value},00)</p>
          <button className='buy-mercadopago' onClick={handleBuy}>Invitar</button>
          {preferenceId &&
            <Wallet initialization={{
              preferenceId: preferenceId,
              redirectMode: 'modal'
            }} customization={{ texts: { valueProp: 'smart_option' } }} />
          }
        </div>
      </div>
    </>
  )
}

export default Product;
