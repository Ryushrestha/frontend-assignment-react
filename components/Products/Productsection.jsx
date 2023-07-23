"use client"
import { Product } from '@/context/ProductContextProvider'
import React, { useContext, useState } from 'react'
import {AiOutlineMinus,AiOutlinePlus,AiFillHeart} from 'react-icons/ai'
import ProductRelated from './ProductRelated'
import { useRouter } from 'next/navigation'


const Productsection = () => {
    
    // let { product } = useContext(Product)
    
 

    const [quantity, setQuantity] = useState(1)
    const [Click,setClick] = useState(false)

    const subHandler = () =>{
        if(quantity > 1) {
            setQuantity(quantity-1)
        }else{setQuantity(1)}

    }

    const addHandler =() =>{
        setQuantity(quantity+1)
    }

    const likeHandler = () =>{
        setClick(!Click)
    }
    const liked= 'gap-1 text-red-500 border border-red-500 text-lg p-1'
    const unliked ='gap-2 text-black border border-black p-1 text-lg'
    console.log("view Product", product)

    // const {addProduct} = useContext(Product)

    const router = useRouter();
 
    // const addProductHandler = (e,product) =>{
    //     e.preventDefault()
    //     addProduct(product)
    //     router.push('/cart')
    // }

    return (
        <div className='flex flex-col mt-10 px-10 sm:px-20 md:px-40'>
        <div className='flex flex-row  gap-10 items-center'>
            <div className='flex  flex-col overflow-hidden shadow-2xl p-2 md:w-2/4 h-40 sm:h-80 md:h-96' >
                <img className='object-scale-down h-40 sm:h-80 md:h-96 w-auto' src={product.image} />
            </div>

            <div className='flex flex-col mt-10 w-4/5'>
                <span >
                    <h1 className='text-lg sm:text-2xl md:text-4xl font-bold'>{product.title}</h1>
                    <p className='sm:text-base md:text-lg text-primary font-bold'>Rs.{product.price}</p>
                    {/* <p className='flex flex-row text-navtext gap-2'>Quantity:<p className='text-primary font-semibold'> {product.rating.count} </p></p> */}
                    <p className='my-5 sm:my-10 md:my-16 line-clamp-4 md:text-clip first-letter:text-5xl first-letter:ms-9 first-letter:font-semibold first-letter:text-primary first-letter:float-left' >{product.description}</p>
                </span>
                <div className='flex flex-row gap-2 sm:gap-5 text-xs font-normal sm:text-base sm:font-semibold'>
                    <span className='flex flex-row gap-1 sm:gap-5 px-1 sm:px-2 py-1 border border-black'>
                    <button onClick={subHandler}><AiOutlineMinus/></button>
                    <p>{quantity}</p>
                    <button onClick={addHandler}><AiOutlinePlus/></button>
                    </span>
                    <button className='bg-black border-x-white text-white  px-1 sm:px-2 py-1' >Add to Cart</button>
                    <button className={`${Click ? unliked : liked}`} onClick={likeHandler}><AiFillHeart/></button>
                </div>
            </div>

        </div>
            <ProductRelated/>
        </div>
    )
}

export default Productsection