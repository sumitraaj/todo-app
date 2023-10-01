import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
import img from './todo_img.webp'
function Home() {
   const navigate=useNavigate();
   const handleRegiter=()=>{
    navigate("/Register")
   }
  return (
    
      <div className='home vh-100 p-5 align-items-center'>
        <div className='heading'>Welcome to the online to do list application!</div>
        <div className='home_container'>
         <div className='m-5'><img src={img} alt="my-image" style={{ borderRadius: '50%' }}></img></div>
         <div className='m-5 align-items-center'>
          <div className='head1 mt-2'>Organize your work and life, finally.</div>
          <div className='second_head mt-2'>Become focused, organized, and calm with task manager and to-do list app.</div>
          <div className='btn-container'>
          <button  onClick={handleRegiter} className='button'>Get Started</button>
          </div>
         </div>
        </div>
      </div>
  )
}

export default Home
