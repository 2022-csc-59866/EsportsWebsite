//import logo from './logo.svg';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes, 
  Route,
  Navigate,
  Link
} from "react-router-dom";
import './App.css';
import Home from "./Home";
import About from "./About";
import ContactUs from "./ContactUs";
import Navbar from './Navbar';
import './nav.css';

function App() {
  let component
  switch(window.location.pathname) {
    case "/":
      component = <Home/>
      break
    case "/about":
      component = <About/>
      break
    case "/contact":
      component = <ContactUs/>

  }

  return (
    <>
      <Navbar/>
      <div className='container'>{component}</div>
    </>
  )
}

export default App;
