import React from 'react'
import { FaInstagram, FaFacebookSquare, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className='h-[200px] bg-gray-500 flex justify-center items-center gap-5'>

      <a href='' className='flex justify-center items-center rounded w-[50px] h-[50px] bg-white'>
        <FaInstagram className='size-9' /></a>
      <a href='' className='flex justify-center items-center  rounded w-[50px] h-[50px] bg-white'>
        <FaFacebookSquare className='size-9' /></a>
      <a href='' className='flex justify-center items-center  rounded  w-[50px] h-[50px] bg-white'>
        <FaTwitter className='size-9' /></a>



    </div>
  )
}

export default Footer