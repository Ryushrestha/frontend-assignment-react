"use client"
import React, { useState } from 'react'
import Main from './Main'
import Search from './Search'
import { BsPerson, BsCart } from 'react-icons/bs'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import NavCategories from './NavCategories'
import { useRouter } from 'next/navigation'



const Navbar = () => {
  const router = useRouter()

  const [nav, setNav] = useState(false)
  const handleOpen = () => {
    setNav(!nav)
  }

  const cartHandler= (e) =>{
    e.preventDefault()
    router.push('/cart')
  }

  return (
    <div className=' '>
      <div className='hidden md:flex bg-background px-20 '>
        <Main />
      </div>
      <div className='h-16  items-center justify-between flex px-5 sm:px-10 py-3 md:px-20'>
        <a href={'/'}><img className='h-11' src={'./logo.png'} /></a>
        <Search />
        <div className='hidden  sm:flex flex-row  gap-5'>
          <span className='flex flex-row my-auto items-center gap-2'>
            <BsPerson className='text-primary text-xl' />
            <a href='/login'><button className='bg-transparent border-none hover:underline' >Sign In</button></a>
          </span>
          <span className='flex flex-row my-auto items-center gap-2'>
            <BsCart className='text-primary text-xl' />
            <button className='bg-transparent border-none hover:underline' onClick={(e)=>cartHandler(e)}>Cart</button>
          </span>

        </div>

        <div>
          <button className='relative sm:hidden cursor-pointer' onClick={handleOpen}>{!nav ?
            (<BiMenuAltRight className='text-primary text-lg' />) : (<AiOutlineClose className='text-primary text-lg' />)
          }</button>

          <div className={!nav ? 'hidden' : 'absolute right-4 rounded-lg border border-navtext bg-slate-100 px-5 py-3 w-2/5 items-start flex flex-col sm:hidden'}>
            <span className='flex flex-row my-3 items-center gap-2'>
              <BsPerson className='text-primary text-xl' />
             <button className='bg-transparent border-none hover:underline' >Sign In</button>
            </span>
            <hr className='border border-navtext w-full' />
            <span className='flex flex-row my-3  items-center gap-2'>
              <BsCart className='text-primary text-xl' />
              <a href='/cart'><button className='bg-transparent border-none hover:underline' onClick={(e)=>cartHandler(e)}>Cart</button></a>
            </span>
          </div>
        </div>
      </div>

      <hr className='border border-navtext border-1' />
      <div className='h-fit items-center justify-between flex px-5 sm:px-10 py-3 md:px-20'>
        <NavCategories />
      </div>
    </div>
  )
}

export default Navbar