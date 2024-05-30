import React from 'react'
import img1 from '../../src/assets/img1.png'

function Contact() {
  return (
    <div className=' h-[700px] flex justify-evenly items-center '>
      <div className='h-[600px] w-[600px] rounded '>
        <img className='h-[600px]' src={img1} rel='' alt="" />
      </div>
      <div className='h-[600px] w-[500px] rounded  bg-[#F2F2F2] drop-shadow-2xl shadow-black '>
        <form className='flex flex-col mt-16 px-10 gap-3 font-bold ' action="">
          <h1>Name</h1>
          <input className='px-16 py-2 border-2 shadow-sm rounded-full border-[#FAEA87] ' type="text" id="" />
          <h1>Email</h1>
          <input className='px-16 py-2 border-2 rounded-full shadow-sm border-[#FAEA87] ' type="text" id="" />
          <h1>Message</h1>
          <input className='px-16 py-20 border-2 rounded shadow-sm border-[#FAEA87]  ' type="text" id="" />



        </form>
        <div className='flex justify-center  items-center p-10'>
          <button className='px-5 rounded py-2 bg-[#FAEA87] shadow-sm font-bold'>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact