import React from 'react';
import {Routes, Route} from "react-router-dom";
import './App.css';
import './nav.css';
import Navbar from './Components/Navbar';
import Home from "./Components/Home";
import About from "./Components/About";
import League from './Components/League';
import Careers from './Components/Careers';
import ContactUs from "./Components/ContactUs";
import Profile from './Components/Profile';
import Footer from './Components/Footer';
import Login from './Components/Login';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/lol" element={<League/>}/>
          <Route path="/careers" element={<Careers/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App;
