import React, { useState } from 'react'
import Navbar from './components/Navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Cart from './pages/Cart/Cart.jsx'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'

const App = () => {
  const [showLogin , setShowLogin] = useState(false);
  return (
    <>
    {showLogin?(<LoginPopup setShowLogin={setShowLogin}/>):(<></>)}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />
      </Routes>
      <Footer/>
    </div>
    </>
  )
}

export default App