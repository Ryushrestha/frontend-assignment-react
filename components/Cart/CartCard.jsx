import { CartProduct } from '@/context/CartContext'

import React, { useContext, useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const CartCard = () => {
    let { product } = useContext(CartProduct)
 

  
    const subHandler = () =>{
        if(quantity > 1) {
            setQuantity(quantity-1)
        }else{setQuantity(1)}

    }
    const [quantity, setQuantity] = useState(1)


    const addHandler =() =>{
        setQuantity(quantity+1)
    }
    const shipping = 130
    return (
<div className=' flex flex-col lg:flex lg:flex-row justify-between gap-5 '>
            <div className='flex flex-row px-5 w-3/4 h-36 mt-3 py-3 gap-2 md:gap-10 justify-between bg-background'>
            <img className='w-1/6' src={product.image} />
            <span className='my-auto'>
                <p className='text-semibold line-clamp-1'>{product.title}</p>
                <p className='text-navtext'>lorem lorem</p>
            </span>
            <span className='my-auto'>
                <p>{product.price}</p>
            </span>
            <span className='flex flex-row items-center  my-auto gap-1 sm:gap-5 px-1 sm:px-2 py-1 border border-black'>
                <button onClick={subHandler}><AiOutlineMinus /></button>
                <p>{quantity}</p>
                <button onClick={addHandler}><AiOutlinePlus /></button>
            </span>
            <span className='my-auto font-semibold'>Total Price:{quantity*parseInt(product.price)}</span>
            </div>

            <div className='bg-background mt-3 md:w-1/2 lg:w-1/5 px-5 py-2 rounded-md'>
            <p className='text-lg text-primary font-semibold uppercase'>Your Final Cost</p>
            <span className='flex justify-between'>
                <p className='text-base font-medium'>Sub Total:</p>
                <p>{quantity*parseInt(product.price)}</p>
                
            </span>
            <span className='justify-between flex'>
                <p className='text-base font-medium'>Shipping Cost:</p>
                <p>{shipping}</p>
            </span>
            <hr className='border-2 my-3 border-navtext'></hr>
            <span className='justify-between flex'>
                <p className='text-base font-medium'>Total</p>
                <p> {quantity*parseInt(product.price)+100}</p>
            </span>
        </div>
        </div>
            
       
    )
}

export default CartCard