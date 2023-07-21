import React from 'react'
import LowerSmartCollection from '../LowerBody.js/LowerSmartCollection'

const ProductRelated = () => {
    return (
        <div className='items-center flex flex-col justify-center  mt-10'>
            <span className='text-base md:text-xl font-semibold'>
                <p className='flex flex-row gap-1'>Related <p className='text-primary'>Mega PRODUCTS</p></p>
                <hr className='border-2 mt-1 border-primary md:w-1/2'></hr>
            </span>
            <LowerSmartCollection/>
        </div>
    )
}

export default ProductRelated