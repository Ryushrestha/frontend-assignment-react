import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
 

const Footerleft = () => {
  return (
    <div className='flex flex-col'>
            <img className='w-1/3' src='./wlogo.png'/>
            <div>
                <p className=' text-xs sm:text-base md:text-lg my-3 text-white font-bold'>Contact Us</p>
                <span className='flex items-center mt-2  gap-3 flex-row text-white  text-xs sm:text-base md:text-base font-semibold'>
                        <BsWhatsapp/>
                        +12344566
                </span> 
                <span className='flex items-center mt-2 gap-3 flex-row text-white  text-xs sm:text-base md:text-base font-semibold'>
                        <BsWhatsapp/>
                        +12344566
                </span> 
            </div>
    </div>
  )
}

export default Footerleft