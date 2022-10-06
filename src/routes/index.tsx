import React from 'react'
import Menu from '../components/Menu'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from '../pages/Detail';
import Home from '../pages/Home';

const RootRoute = () => {
  return (
    <div>
      <BrowserRouter>
        <Menu />     
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/:id" element={<Detail />} />  
        </Routes>
      </BrowserRouter>
         
    </div>
  )
}

export default RootRoute