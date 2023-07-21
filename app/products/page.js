"use client"
import HeroCarousel from '@/components/Hero/HeroCarousel'
// import ProductRelated from '@/components/Products/ProductRelated'
import Productsection from '@/components/Products/Productsection'
// import { Product } from '@/context/ProductContextProvider'
import React, { useContext } from 'react'

const page = () => {
    

   
  return (
    <div className='flex flex-col'>
      <HeroCarousel />
      <Productsection/>
      {/* <ProductRelated/> */}
      </div>
      
  )
}

export default page