import React from 'react'
import { Link } from 'react-router-dom'
import img from './images/salon.png'
 const Register = () => {
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
        <h1 className="text-white font-bold">register</h1>
        <p className="text-white">already have an account? <span><Link to="/login">Login</Link></span></p>
        <br/>
        <input type='text' placeholder='Full Name'></input>
        <hr/>
        <input type='email' placeholder='Email'></input>
        <hr/>
        <input type='text' placeholder='Mobile no'></input>
        <hr/>
        <p>I accept the terms and conditions including the privacy</p>
        <br/>
        <Link to="/register" className="register-btn">Register</Link>
      </div>
      
    </>
  )
}
export default Register;