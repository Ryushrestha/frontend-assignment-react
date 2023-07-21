import React from 'react'
import Footerleft from './Footerleft'
import FooterRight from './FooterRight'

const Footersection = () => {
  return (
    <div className='bg-primary mt-11 md:mt-8 lg:mt-4 px-5 sm:px-10 md:px-20 py-10 flex flex-row'>
        <Footerleft/>
        <FooterRight/>
    </div>
  )
}

export default Footersection