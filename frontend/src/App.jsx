import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar.jsx"
import HomePage from "./components/HomePage.jsx"
import Register from "./components/Register.jsx"
import Login from "./components/Login.jsx"
import About from "./components/About.jsx"
import { Routes, Route, useLocation } from "react-router-dom"

function App() {
  const location = useLocation();
  const noNavbar = location.pathname === '/login' || location.pathname === '/register'
  return (
    <>
      {
        noNavbar ?
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>

          :

          <Navbar
          content={
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
            </Routes>
          }
          />
      }
    </>
  )
}

export default App
