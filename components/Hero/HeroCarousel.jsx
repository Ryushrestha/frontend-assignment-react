'use client'
import { getProducts } from '@/products/axios.products'
import React, { useEffect, useState } from 'react'
import HeroCard from './HeroCard'
import dynamic from "next/dynamic";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const HeroCarousel = () => {
  


  const [products, setProducts] = useState([])

  const getProductCollection = async () =>{
    const results = await getProducts()
    const data = results.slice(0,9)
    setProducts(data)
  }
  useEffect(()=>{
    getProductCollection()
  },[])
 



  var $ = require("jquery");
  if (typeof window !== "undefined") {
      window.$ = window.jQuery = require("jquery");
  }

  const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
      ssr: false,
  });
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: false,
    navText:["<span><AiOutlineLeftCircle/></span>","<span><AiOutlineLeftCircle/></span>"],
    smartSpeed: 1000,

    responsive: {
        0: {
            items: 2,
        },
        400: {
            items: 2,
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 4,
        },
    },
};
  return (
    <OwlCarousel
    className="owl-theme mt-4 px-5"
            loop
            margin={4}
            nav={true}
            dots={false}
            animateIn={true}
            {...options}>
   
      {
        products && products.map((item)=>{
          return <HeroCard key={item.id} actualProduct={item}/>
        })
      }
    </OwlCarousel>
  )
}

export default HeroCarousel