import React from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import second from './Products'
import Content from './Products'
import { CiHeart } from 'react-icons/ci'
import { FaHeart } from 'react-icons/fa'

function Card({ name, Rating, Price, image, Author }) {






  return (

    <div className='   m-10 p-5 min-h-[370px] rounded overflow-hidden w-[200px] flex flex-col gap-1'>

      <div>
        <img className='object-cover h-[200px]' src={image} alt="" />
      </div>

      <h1 className='text-[18px]  font-bold overflow-hidden whitespace-nowrap text-ellipsis'>{name}</h1>
      <h2 className='text-xs font-semibold'>{Author}</h2>
      <h3>{Rating}</h3>
      <h4>{Price}</h4>

      <div className='flex gap-1 '>
        <button className=' duration-300 outline outline-1 outline-zinc-300 hover:bg-black hover:text-white px-2 py-1 rounded-lg'>ADD TO BAG</button>
        <button className='px-2 py-1 rounded'><AiFillHeart className='fill-zinc-200 size-[30px] hover:fill-red-500' /></button>

      </div>


    </div>
  )
}

export default Card