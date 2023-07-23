import React from 'react'

const FooterRight = () => {
  return (
    <div>
        <span className='text-white font-bold text-xs sm:text-base md:text-lg'>
            <p>Most Popular Categories</p>
            <hr className='border border-white'/>
        </span>
        <ul className='text-white gap-3  text-xs sm:text-base md:text-lg font-semibold mt-2'>
            <a href='/electronics' className='hover:underline my-2'><li>Electronics</li></a>
            <a href='/jewelery' className='hover:underline my-2'><li>Jewelery</li></a>
            <a href='/mens clothing' className='hover:underline my-2'><li>Mens Clothing</li></a>
        </ul>
    </div>
  )
}

export default FooterRight