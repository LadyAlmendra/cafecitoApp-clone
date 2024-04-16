import { Link } from "react-router-dom"

const SignIn = () => {

  return (
    <div className='box'>
      <h1>Sign in</h1>
      <div className='form'>
        <label>Usernamer or primary email</label>
        <input type="text" placeholder='Email' />
        <label>Password</label>
        {/* <input type="password" placeholder='Password' /> */}
        <button className="btn">Sign In</button>
      </div>
      <div className='container-link'>
        Don't have an account yet? <Link className="link" to="/sign-up">Register now</Link>
      </div>
    </div>
  )
}

export default SignIn
