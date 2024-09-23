import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../Home/Home';
import Crew from '../Crew/Crew';
import Technology from '../Technology/Technology';
import Destination from '../Destination/Destination';

export const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>} />
        <Route path="/crew" element={<Crew/>}/>
        <Route path="/technology" element={<Technology/>}/>
        <Route path="/destination" element={<Destination/>}/>
    </Routes>
  )
}
export default Routers