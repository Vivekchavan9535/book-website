import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Contact from './Contact'
import { FaShoppingCart } from 'react-icons/fa'
import { IoMdClose, IoMdMenu } from 'react-icons/io'


function Navbar() {

  const [sidemenu, setsidemenu] = useState(false)



  return (
    <>
      <nav className=' w-full h-16 flex justify-between md:justify-between items-center px-7 md:px-10 fixed bg-white z-10 border-b-2 border-slate-200 '>
        <Link to="/"><h1 className=' font-extrabold text-2xl  '>VC BOOKs</h1></Link>

        <ul className='hidden md:flex  gap-10 font-bold px-10 cursor-pointer   '>
          <Link to="/" className='hover:text-red-500'>HOME</Link>
          <Link to="/contact" className='hover:text-red-500'>CONTACT</Link>
          <Link to="/cart"><FaShoppingCart className='size-5 text-center' /></Link>

        </ul>

        <div onClick={() => setsidemenu(!sidemenu)} className='md:hidden flex justify-center items-center'>

          {sidemenu ? <IoMdClose size={35} /> : <IoMdMenu size={35} />}

          {sidemenu && (
            <ul className='bg-white  absolute  right-0  top-0 h-screen w-full'>

              <div className='w-full flex justify-end items-center p-4 pr-7'>
                <IoMdClose size={35} />
              </div>

              <div className='flex justify-center flex-col items-center gap-3 font-bold text-2xl h-[300px] w-full '>
                <Link to="/" className='hover:text-red-500'>HOME</Link>
                <Link to="/contact" className='hover:text-red-500'>CONTACT</Link>

              </div>
            </ul>
          )}


        </div>

      </nav>





    </>


  )
}

export default Navbar