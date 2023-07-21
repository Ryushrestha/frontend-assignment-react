import React from 'react'
import {CiLocationOn, CiDeliveryTruck, CiDiscount1} from 'react-icons/ci'


const Main = () => {
  return (
    <div className='items-center text-navtext text-sm w-full justify-between h-8 flex'>
        <div>
            <h1 className=''>Welcome to worldWide MegaMart!</h1>
        </div>
        <div className='justify-evenly flex flex-row gap-5'>
            <span className='flex flex-row my-auto'>
                    <CiLocationOn className='text-primary text-xl'/>
                    <span className='flex flex-row'>
                        <p>Deliver to</p>
                        <p className='font-bold'>1234</p>
                    </span>
            </span>
            <div className='h-10 border-1 border-navtext'></div>
            <span className='flex flex-row my-auto'>
                    <CiDeliveryTruck className='text-primary text-xl'/>           
                        <p>Track Your Order</p>
            </span>

            <span className='flex flex-row my-auto'>
                    <CiDiscount1 className='text-primary text-xl'/>           
                        <p>Offer</p>
            </span>
        </div>
    </div>
  )
}

export default Main