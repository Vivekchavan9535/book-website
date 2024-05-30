import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BooksData } from '../components/BooksData'

function ProductDetail() {

  const [product, setproduct] = useState({})

  const { id } = useParams()

  useEffect(() => {
    getproduct()
  }, [])

  const getproduct = () => {
    const newproduct = BooksData.find((item) => item.id === parseInt(id))
    setproduct(newproduct)
  }




  return (
    <>
      <div className=" h-screen w-full flex pt-28">

        <div className='w-[100%] xl:h-[90%] xl:w-[100%]  flex flex-col xl:flex-row   '>

          <div className=' flex justify-center items-center h-full xl:w-[40%] '>
            <img className='lg:h-[600px] h-[400px] pt-10 md:p-0' src={product.image} alt="" />
          </div>

          <div className='xl:w-[50%] w-full h-full k text-black  p-10 xl:pt-28'>
            <h1 className=' font-bold text-4xl'>{product.name}</h1>
            <h2 className='text-xl font-semibold'>{product.Author}</h2>
            <h3 className='text-4xl xl:pt-8 font-semibold'>{product.Price}</h3>
            <span className='text-xs'>(Inclusive of all taxes)</span>

            <div className='pt-10'>

              <select className='w-14 h-10 border p-2 border-black rounded outline-none' name="quantity" id="quantity">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>

              </select>

            </div>

            <div className=' w-[580px] pt-10  justify-between font-semibold hidden xl:flex ' >
              <button className='uppercase px-24 py-3 border-2 border-black text-black rounded hover:bg-black hover:text-white'>Add To Bag</button>
              <button className='hover:bg-white hover:text-black hover:border-black hover:border-2 uppercase px-24 py-3  bg-black text-white rounded'>Buy It Now</button>
            </div>
          </div>



        </div>




      </div>




      <div className='border-2 border-black bg-white h-16 fixed bottom-0 right-0 left-0 xl:hidden'>

        <div className='h-full w-full flex justify-center font-bold'>

          <button className='uppercase w-[50%]'>Add To Bag</button>
          <button className='uppercase w-[50%] bg-black text-white'>Buy It Now</button>
        </div>


      </div>





    </>

  )
}

export default ProductDetail