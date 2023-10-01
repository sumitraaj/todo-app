import React, { useState } from 'react';
import { json, useNavigate } from 'react-router-dom';
import { Navigate ,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './login.css'
const LoginForm = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your login logic here
    const input=JSON.parse(localStorage.getItem(formData.username));
    if(input==null){
        alert("enter a valid username");
    }
    else{
    if(formData.username===input.username && formData.password===input.password)
    { 
      localStorage.setItem("loggedIn",true);
      localStorage.setItem("currentUser",formData.username);
      navigate("/Main");
    }
    else alert("Please Enter correct username and password")
    console.log('Form submitted:', formData);
  }
  };

  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100'>
    <div className='form_container p-5 rounded bg-white'>
    <form onSubmit={handleSubmit}>
      <h3 className='text-center'>Sign In</h3>
      <div className='mb-2'>
        <label htmlFor="username">Username:</label>
        <input 
          className='form-control mt-2'
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder='Enter username'
          required
        />
      </div>
      <div className='mb-2'>
        <label htmlFor="password">Password:</label>
        <input
          className='form-control mt-2'
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder='Enter password'
          required
        />
      </div>
      <div className='d-grid'>
      <button type="submit" className='btn btn-primary mt-2'>Login</button>
      </div>
      <div>
        <p className='text-center mt-4'>Don't have account?
          <Link to="/register"><u>Register here</u></Link>
        </p>
      </div>
    </form>
    </div>
    </div>
  );
};

export default LoginForm;
