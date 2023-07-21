"use client"
import React, { useContext } from 'react'
import CartHeading from './CartHeading'

import CartCard from './CartCard'




const CartSection = () => {
    

  
  return (
    <div className='flex flex-col mt-10 px-10 sm:px-20 md:px-40'>
        <CartHeading/>
        
        <div className='w-full '>
        <CartCard/> 
        </div>
       
    </div>
  )
}

export default CartSection