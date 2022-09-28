import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage';
import UcampersPage from '../pages/UcampersPage';

const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/ucampers" element={<UcampersPage/>}/>
            <Route path="*" element={<h1>Eror 404</h1>}/>
        </Routes>
    </Router>
  )
}

export default AppRouter