"use client"
import { Product } from '@/context/ProductContextProvider'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'

const HeroCard = ({ actualProduct }) => {
    

    const router = useRouter();


    const viewHandler = (e,actualProduct) =>{
        e.preventDefault()
        handleProduct(actualProduct)
        router.push('/products')   
    }

    const {handleProduct} = useContext(Product)

    return (
        <div className='relative items-center border-2 border-primary overflow-hidden  rounded-lg h-60 sm:h-96 shadow-md shadow-gray-800 '>
            <img className='  w-1/3 object-left-bottom overflow-hidden  h-80' style={{height:'480px'}} src={actualProduct.image} />
            <div className='absolute bottom-6 right-8  z-50 flex flex-col bg-black bg-opacity-70  w-52 px-2 py-3 rounded-md'>
                <p className='uppercase truncate text-base text-white font-medium'>{actualProduct.title}</p>
                <p  className='line-clamp-3 text-sm text-zinc-200 mt-2 first-letter:uppercase'>{actualProduct.description}</p>
                <a href='/products' className='items-center flex'><button className='bg-inactiveColor mt-2 rounded w-fit px-2 mx-auto hover:bg-primary hover:text-white' onClick={(e)=>viewHandler(e,actualProduct)}>View Product</button></a>
            </div>
        </div>
    )
}

export default HeroCard