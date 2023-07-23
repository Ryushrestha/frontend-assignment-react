import { getProducts } from '@/products/axios.products'
import { LoremIpsum } from 'lorem-ipsum'

import React, { useContext, useEffect, useState } from 'react'
import BodyAdvertisement from './BodyAdvertisement'
import { Product } from '@/context/ProductContextProvider'

const lorem = new LoremIpsum()
const BodySection = () => {
    
    const [product,setproducts]= useState()
    const getProductCollection = async()=>{
        const result = await getProducts()
        const data = result.slice(11,14)
        setproducts(data)
    }
    useEffect(()=>{
        getProductCollection()
    },[])

    
  return (
    <div className='flex flex-row items-start px-5 sm:px-10 md:px-20 gap-4'>
        <div className='flex flex-col w-full lg:w-3/4'>
        <h1 className='text-black text-xl sm:text-4xl font-bold '>Top Products by<br></br>Mega Mart</h1>
        <p className='hidden md:flex text-navtext w-2/3 mt-2'>{lorem.generateWords(30)}</p>
        <hr className='mt-2 border-2 border-gray-200'></hr>
        <div className=' flex flex-row gap-2 mt-3 sm:gap-7'>
        {
            product && product.map((products,index)=>{
                return(
                    <div key={index} className='relative items-center  flex flex-col h-40 sm:h-60'>
                        <div className='overflow-hidden'>
                            <img className='object-fill' src={products.image}/>
                        </div>
                        <div className='absolute -bottom-6 border border-x-white bg-black  py-4 w-11/12 sm:w-4/5'>
                        <h1 className='truncate text-white font-semibold text-sm sm:text-lg px-3 md:px-10 lg:px-20 sm:px-5 '>{products.title}</h1>
                        <p className='truncate text-zinc-300 text-sm sm:text-base px-5'>{products.description}</p>
                        </div>
                    </div>
                )
            })
        }
        </div>
        </div>
        <div className='hidden lg:flex w-1/4'>
            <BodyAdvertisement/>
        </div>
    </div>
  )
}

export default BodySection