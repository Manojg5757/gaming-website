import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Market from './pages/Market'
import News from './pages/News'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/market' element={<Market />}  />
        <Route path='/news' element={<News />}  />
        <Route path='/cart' element={<Cart />}  />
      </Routes>
    </BrowserRouter>
  )
}

export default App