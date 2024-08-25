import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Backet from './Products';
import { useState } from 'react';
import { useEffect } from "react";


import Home from './Home';
// import { Route, Routes } from 'react-router';

// import About from "./About";
import Order from "./Order";
import Delivery from "./Delivery";
import Help from "./Help";


function App() {

  
  return (
 
    <Router>
      <nav>
      <Link to ="/"className="link">Магазин</Link>
        {/* <Link to ="/about"className="link">О нас</Link> */}
        <Link to ="/order" className="link">Заказы</Link>
        <Link to ="/delivery" className="link">Доставка</Link>
        <Link to ="/help" className="link">Помощь</Link>
      </nav>
  

    <Routes>
    <Route path = "/" element ={<Home/>}/>
      {/* <Route path = "/about" element ={<About/>}/> */}
       <Route path = "/order" element ={<Order/>}/>
       <Route path = "/delivery" element ={<Delivery/>}/>
       <Route path = "/help" element = {<Help/>}/>
      
    </Routes>
    </Router>



  )


}

export default App;
