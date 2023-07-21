"use client"
import { getCategories } from '@/products/axios.products'
import React, { useEffect, useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'

const NavCategories = () => {
    const [categories, setCategories] = useState([])
    const [pathname, setPathname] = useState('')
    const getCategoriesCollection = async () => {
        const results = await getCategories()
        const data = results.slice(0,2)
        setCategories(data)
    }
    useEffect(() => {
        getCategoriesCollection()
    }, [])

    useEffect(() => {
        setPathname(window.location.pathname);
    }, []);



    const activeLink = 'border-none px-2 rounded-xl uppercase text-white text-xs sm:text-sm bg-primary flex flex-row items-center truncate sm:text-clip gap-2'
    const inactiveLink = 'border-none px-2 rounded-xl uppercase text-xs sm:text-sm bg-inactiveColor flex flex-row  items-center gap-2 '
    return (

        <div className='flex flex-row flex-wrap gap-5 mt-1 '>
            {
                categories && categories.map((category, index) => {
                    return (
                        <div key={index} className='relative'>
                            <a href={category} ><button className={`${pathname === `/${category}` ? activeLink : inactiveLink}`}>{category}<BiChevronDown className={`${pathname === `/${category}` ? 'text-white text-lg' : 'text-primary text-lg'}`} /></button>
                            </a>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default NavCategories