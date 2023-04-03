//import logo from './logo.svg';
import React, { useState } from 'react';
import {Routes, Route} from "react-router-dom";
import './App.css';
import './nav.css';
import Home from "./Home";
import About from "./About";
import ContactUs from "./ContactUs";
import Navbar from './Navbar';
import League from './League';
import { Login } from './Login';
import { Register } from './Register';

function App() {
  const [currentForm, setCurrentForm] = useState('login')

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/lol" element={<League/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/login" element={currentForm === "login" ? <Login onFormSwitch={toggleForm}/>: <Register onFormSwitch={toggleForm}/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App;
