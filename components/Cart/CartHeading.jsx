import React from 'react'
import {AiOutlineArrowLeft} from 'react-icons/ai'

const CartHeading = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold'>Shopping Cart</h1>
      <a href='/' className='flex flex-row gap-3 items-center'><AiOutlineArrowLeft className='text-primary '/>Continue Shopping</a>
    </div>
  )
}

export default CartHeading