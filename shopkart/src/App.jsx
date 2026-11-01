import React from 'react'
// import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Products from './pages/Products'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'


export default function App() {
  return (
    <>
    <Navbar> </Navbar>
    <Home></Home>
    <Cart></Cart>
    <Products></Products>
    <Login></Login>
    <Register/>
    {/* <Routes>
      <Route></Route>
    </Routes> */}
    </>
  )
}
