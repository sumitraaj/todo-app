import React from "react";
import Main from "./Main";
import Register from './Components/Register'
import Login from './Components/Login'
import Home from './Components/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ProtectedRoute from "./Services/ProtectedRoute";
function App() {
  
  return (
      <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={<ProtectedRoute/>}>
          <Route path="/main" element={<Main/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
