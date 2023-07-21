import { getAdvertise } from '@/products/axios.products'
import React, { useEffect, useState } from 'react'

const BodyAdvertisement = () => {
    const [advert,setAdvert] = useState()
    const getAdvert = async () =>{
        const result= await getAdvertise()
        const data = result.slice(3,6)
        setAdvert(data)
    }
    useEffect(()=>{
        getAdvert()
    },[])
  return (
    <div className='flex flex-col'>
        <span className='text-lg font-semibold'>
            Sponsered By:
        </span>
        <div className='w-full'>
      {
        advert && advert.map((products,index)=>{
          return(
            <div key={index} className='flex flex-row mt-4 gap-2'>
              <div className='w-1/2 overflow-hidden'>
              <img className='h-32 w-full ' src={products.links.download}/> 
              </div>
              <div className='flex flex-col align-middle my-auto  w-1/2 '>
                <p className='uppercase font-medium line-clamp-2'>{products.alt_description}</p>
                <a href={products.links.download} className=' text-primary font-medium items-center hover:underline'>View</a>
              </div>
              
            </div>
            
          )
        })
      }
      </div>
    </div>
  )
}

export default BodyAdvertisement