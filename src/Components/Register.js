import React, { useState } from 'react';
import { useNavigate ,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './login.css'
const RegistrationForm = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    confirmPassword: '',
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
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
  localStorage.setItem(formData.username, JSON.stringify(formData));
  localStorage.setItem(formData.username+"todolist",JSON.stringify([]));
  localStorage.setItem(formData.username+"completedTodos",JSON.stringify([]));

    navigate("/login")
    console.log('Form submitted:', formData);
  };

  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100'>
    <div className='signup_container p-5 rounded bg-white'> 
    <form onSubmit={handleSubmit}>
    <h3 className='text-center'>Sign Up</h3>
      <div className='mb-2'>
        <label htmlFor="name">Name:</label>
        <input
          className='form-control mt-2'
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter name"
          required
        />
      </div>
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
          placeholder="Enter password"
          required
        />
      </div>
      <div className='mb-2'>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          className='form-control mt-2'
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Enter Confirm password"
          required
        />
      </div>
      <div className='d-grid'>
      <button type="submit" className='btn btn-primary mt-2'>Register</button>
      </div>
      <div>
        <p className='text-center mt-4'>Already have an account?
          <Link to="/login"><u>Login here</u></Link>
        </p>
      </div>
    </form>
    </div>
    </div>
  );
};

export default RegistrationForm;
