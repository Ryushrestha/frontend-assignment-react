"use client"
import { Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BsFilter, BsSearch } from 'react-icons/bs'

const Search = () => {
  const [product, setProduct] = useState([])
  const [category, setCategory] = useState('')


  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
      .then((response) => {
        setProduct(response)
      })
  }, [])
  console.log("search",product)

  return (
    <div className='w-1/3 relative md:w-1/2'>
      <InputGroup className='border-none '>
        <InputLeftElement ><button ><BsSearch className='text-primary text-lg' /></button></InputLeftElement>
        <Input placeholder='Search essentials products' value={category} onChange={(e) => setCategory(e.target.value)} />
        <InputRightElement><BsFilter className='text-primary text-lg' /></InputRightElement>
      </InputGroup>

      <div className='rounded-sm bg-white absolute w-full z-50 shadow-white '>
        {/* {
          product && product
        } */}
      </div>
    </div>
  )
}

export default Search