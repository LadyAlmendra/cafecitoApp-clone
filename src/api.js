let payment_mercadopago_url = "http://localhost:3000";

if (process.env.NODE_ENV === 'production'){
    payment_mercadopago_url = import.meta.env.VITE_MERCADOPAGO_URL
}

export default payment_mercadopago_url;