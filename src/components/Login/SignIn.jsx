import { Link } from "react-router-dom"

const SignIn = () => {

  return (
    <div className='box'>
      <h1>Sign in</h1>
      <div className='form'>
        <input type="text" placeholder='Email' disabled />
        <input type="text" placeholder='Password' disabled />
        <button className="btn">Sign In</button>
      </div>
      <div className='container-link'>
      ¿Aún no tienes una cuenta?  <Link className="link" to="/sign-up">Registrar ahora</Link>
      </div>
    </div>
  )
}

export default SignIn
