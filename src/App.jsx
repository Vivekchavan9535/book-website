import React from 'react'
import Navbar from './components/Navbar'
import Home from './Home'
import Content from './Products'
import Card from './Card'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'
import Product from './components/ProductDetail'
import ProductDetail from './components/ProductDetail'
import { BooksData } from '../src/components/BooksData'


function App() {






  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/ProductDetail/:id' element={<ProductDetail />} />




      </Routes>

    </>
  )
}

export default App