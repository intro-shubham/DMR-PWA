import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';

function App() {
  return (
    // there is no use of Switch, use Routes instead Switch..
    <BrowserRouter>
      <div>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />  
          </Routes>
          <Routes>
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
