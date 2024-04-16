import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='box'>
      <h1>Register</h1>
      <div className='form'>
        <input type="text" placeholder='Email' disabled/>
        <p>We recommend a work email address</p>
        <input type="text" placeholder='Password' disabled />
        <p>Minimum length is 8 characters</p>
        <button className="btn">Register</button>
      </div>
      <div className='container-link'>
      ¿Ya tienes una cuenta? <Link className="link" to="/login">Iniciar Sesión</Link>
      </div>
    </div>
  )
}

export default Register;
