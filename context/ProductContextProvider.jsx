"use client"
import { createContext, useState } from "react";


export const Product = createContext(null);



function GlobalState({children}){
    const [product,setProduct] = useState([])
    function handleProduct(getCurrentItem){
        console.log('current',getCurrentItem)
        setProduct(getCurrentItem)
    }
    return (
    <Product.Provider value={{product,handleProduct}}>
            {children}
    </Product.Provider>
    )
}

export default GlobalState