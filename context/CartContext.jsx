"use client"
import { createContext, useState } from "react";


export const CartProduct = createContext(null);



function CartState({children}){
    const [product,setProduct] = useState([])
    function handleCartProduct(getCurrentItem){
        // console.log('current',getCurrentItem)
        
        setProduct(getCurrentItem)
        // console.log('cart',getCurrentItem)
    }
    return (
    <CartProduct.Provider value={{product,handleCartProduct}}>
            {children}
    </CartProduct.Provider>
    )
}

export default CartState