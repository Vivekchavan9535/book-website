import React, { useState } from 'react'
import Content from './Products'
import Footer from './components/Footer'
import SideMenu from './components/SideMenu'
import { Link } from 'react-router-dom'
import { BooksData } from './components/BooksData'

function Home() {



  return (
    <>
      <SideMenu />

      <div className=' md:h-[700px] flex flex-col md:flex-row justify-between items-center md:px-20 w-full pt-20'>

        <Link className=''>
          <img className='h-[300px] md:h-[600px]' src="http://www.eourmart.com/cdn/shop/products/AtomicHabits1.png?v=1662554233" alt="" />
        </Link>

        <div className='md:w-[40%] p-10'>

          <h1 className='font-bold text-4xl pb-5 md:text-7xl md:pb-10 text-[#eac98f]'>Atomic Habits</h1>

          <h1 className='font-bold md:text-2xl' >“A supremely practical and useful book. James Clear distills the most fundamental information about habit formation, so you can accomplish more by focusing on less.”</h1>

          <h2 className='pt-6 font-bold'>Mark Manson</h2>

          <h3 className='text-sm font-medium'>#1 New York Times best-selling author</h3>

        </div>





      </div>

      <Content />
      <Footer />
    </>




  )
}

export default Home