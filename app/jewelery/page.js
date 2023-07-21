"use client"
import HeroCarousel from '@/components/Hero/HeroCarousel'
import { Product } from '@/context/ProductContextProvider'
import { getJeweleryByCategories } from '@/products/axios.products'
import { Divider } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'

const page = () => {
  const [electronic, setElectronic] = useState([])
  const { addProduct } = useContext(Product)
  const router = useRouter();

  const getJeweleryCategories = async () => {
    const results = await getJeweleryByCategories()
    setElectronic(results)
  }
  useEffect(() => {
    getJeweleryCategories()
  }, [])
  console.log("e", electronic)

  const viewHandler = (e, product) => {
    e.preventDefault()
    addProduct(product)
    router.push('/products')
    console.log('single', product)

  }

  return (
    <div className='items-center flex flex-col justify-  md:mt-8 lg:mt-4 mb-4 px-5 sm:px-10 md:px-20 mt-10'>
      <HeroCarousel />
      <span className='text-base md:text-xl font-semibold'>
                <p className='flex flex-row gap-1'>Top product of <p className='text-primary'>Jewelery</p></p>
                <hr className='border-2 mt-1 border-primary md:w-1/2'></hr>
            </span>
      <div className='flex flex-wrap justify-evenly md:justify-start mt-3 gap-1 md:gap-3'>
        {
          electronic && electronic.map((product, index) => {
            return (
              <div key={index}>
                <div className='w-32 sm:w-40 md:w-60 h-fit border border-zinc-300 rounded-md shadow-xl p-2'>
                  <div className='items-center flex flex-col '>
                    <img className='w-24 h-16 sm:w-32 sm:h-24 md:w-60 md:h-52 object-fit' src={product.image} />
                    <span>
                      <h1 className='text-base sm:text-lg md:text-xl font-bold line-clamp-1'>{product.title}</h1>
                      <p className='text-xs sm:text-sm md:text-sm my-1 md:my-3 line-clamp-2 md:line-clamp-3'>{product.description}</p>
                      <p className='font-semibold  text-primary  text-base md:text-lg'>Rs. {product.price}</p>
                    </span>
                  </div>
                  <Divider className='my-1 sm:my-2' />
                  <div>
                    <span className='flex flex-row justify-around'>
                      <button className='bg-primary px-1 sm:px-2 rounded-md text-white text-xs sm:text-sm' onClick={(e) => viewHandler(e, product)}>View </button>
                      <button className='text-primary font-semibold text-xs sm:text-base md:text-lg hover:underline'>Add to cart</button>
                    </span>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div >
  )
}

export default page