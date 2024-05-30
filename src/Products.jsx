import React, { useState } from 'react'
import Card from './Card'
import { Link, Route, Routes } from 'react-router-dom'
import Product from './components/ProductDetail'
import ProductDetail from './components/ProductDetail'
import { BooksData } from '../src/components/BooksData'


function Products() {

  const [products, setproducts] = useState(BooksData)


  return (
    <div className='flex justify-center '>

      <div className='max-w-[100%] min-h-[700px] flex justify-center  md:justify-start flex-wrap  lg:grid grid-cols-5  '>
        {products.map((item) => {
          const { image, id, name, Author, Price } = item;

          return (
            <Link key={id} to={`ProductDetail/${id}`}>
              <Card image={item.image} Author={item.Author} name={item.name} Rating={item.Rating} Price={item.Price} />

            </Link>

          )
        })}
      </div>

    </div>
  )
}

export default Products