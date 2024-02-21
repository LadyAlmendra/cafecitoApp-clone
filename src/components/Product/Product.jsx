import './Product.css';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
initMercadoPago('YOUR_PUBLIC_KEY');
import { useState } from 'react';

const Product = () => {
  const [value, setValue] = useState(1);

  const handleIncrement = () => {
    setValue(prevValue => prevValue + 1);
  };
  const handleDecrement = () => {
    setValue(prevValue => (prevValue > 1 ? prevValue - 1 : prevValue));
  };

  const handleChange = event => {
    setValue(parseInt(event.target.value));
  };
  return (
    <>
      <div className='box card-tips'>
        <h4>
          ¡Ayúdame con un café!
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
          <p>Invitame 1 Cafecito (ARS $5,00)</p>
          <button className='buy-mercadopago'>MercadoPago</button>
        </div>

      </div>
      <div id="wallet_container"></div>
    </>
  )
}

export default Product;
