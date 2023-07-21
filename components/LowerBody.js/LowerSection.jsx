import React from 'react'
import LowerSmartCollection from './LowerSmartCollection'
import { Button, Menu, MenuButton, MenuList } from '@chakra-ui/react'

const LowerSection = () => {
  return (
    <div className='flex flex-col mt-11 md:mt-8 lg:mt-4 mb-4 px-5 sm:px-10 md:px-20'>
          <div className='justify-between flex flex-row'>
                <span className='text-base md:text-xl font-semibold'>
                    <p className='flex flex-row gap-1'>Grab the best deal on <p className='text-primary'>Mega PRODUCTS</p></p>
                    <hr className='border-2 mt-1 border-primary md:w-96'></hr>
                </span>

                <div className='hidden md:flex'>
               
                </div>
            </div>
        <LowerSmartCollection/>
    </div>
  )
}

export default LowerSection