import './Product.css';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Cross } from 'akar-icons';

const Product = () => {
  const UrlMercadopago = import.meta.env.VITE_MERCADOPAGO_URL;

  initMercadoPago(import.meta.env.VITE_PUBLIC_KEY, {
    locale: 'es-AR'
  });
  const [value, setValue] = useState(1);
  const [preferenceId, setPreferenceId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [walletVisible, setWalletVisible] = useState(false);
  const [valueCafe, setValueCafe] = useState(5)

  const URL = `${UrlMercadopago}/payment-mercadopago/create-order/`;

  const items = [
    {
      title: "Cafe Toxic",
      quantity: value,
      unit_price: valueCafe
    }
  ]
console.log(items)
  const createPreference = async () => {
    try {
      const data = {
        items,
        back_urls: {
          success: `${import.meta.env.VITE_URL_REDIRECT}/success`,
          failure: `${import.meta.env.VITE_URL_REDIRECT}/failure`,
          pending: `${import.meta.env.VITE_URL_REDIRECT}/pending`,
        }
      };

      setIsLoading(true);
      const response = await axios.post(URL, data);
      const id = response.data.preferenceId;
      return id

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
      })
    } finally {
      setIsLoading(false);
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

  useEffect(() => {
    if (preferenceId) {
      setWalletVisible(true);
    }
  }, [preferenceId]);

  const handleCloseModal = () => {
    setWalletVisible(false);
    setPreferenceId(null);
    setValueCafe(5)
    setValue(1);
  };

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
          <p className='inv'>Invitame {value} Cafecito (ARS ${valueCafe * value},00)</p>

          <button className='buy-mercadopago fade-in' onClick={handleBuy} disabled={isLoading}>
            {isLoading ? 'Preparando pago...' : 'Invitar Cafecito'}
          </button>

          {walletVisible && (
            <div className='modal-buy-mercadopago fade-in'>
              <span className='modal-close' onClick={handleCloseModal}>
                <Cross strokeWidth={2} size={25} />
              </span>
              <div>
                <p className='modal-header'>Invitame {value} Cafecito <br />
                  (ARS ${5 * value},00)</p>
                <Wallet className='fade-in' initialization={{
                  preferenceId: preferenceId,
                  redirectMode: 'modal'
                }} customization={{ texts: { valueProp: 'smart_option' } }} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Product;
