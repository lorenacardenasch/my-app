import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Routes/Home/Home';
import "./App.css"

const App = () => {
  const o = "Lo que sea";
  return (
      <div className='app'>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          {console.log(o)}
        </Routes>
      </div>
  )
}

export default App