import React from 'react'
import img from './images/salon.png'
import { Link } from 'react-router-dom'
 const Login = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/salon">SALON</Link></li>
          <li><Link to="/shop">SHOP</Link></li>
          <li><Link to="/about">ABOUT US</Link></li>
        </ul>
        <Link to="/login" className="login-btn">Login</Link>
      </nav>
      <div className='img-container'>
        <img src={img} alt="Sample" />
      </div>
      <div className="registration-block">
        <h1 className="text-white font-bold">Login</h1>
        <p className="text-white">already have an account? <span><Link to="/register">Register</Link></span></p>
        <br/>
        <input type='text' placeholder='Mobile no'></input>
        <hr/>

        <br/>
        <Link to="/login" className="register-btn">Get OTP</Link>
      </div>
      
    </>
  )
}
 export default Login;