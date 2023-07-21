import axios from "axios";

export const getCategories = async () =>{
    const response = await axios.get('https://fakestoreapi.com/products/categories')
    const data = response.data

    return data;
}

export const getProducts = async () =>{
    const response = await axios.get('https://fakestoreapi.com/products')
    const data = response.data
    return data
}

export const getAdvertise = async () =>{
    const response = await axios.get('https://api.unsplash.com/photos/?client_id=DAii1-WBYPZhRIkHoHQicqGkhCMcpJqJoSCEPF5uzQQ')
    // console.log(response.data)
    const data = response.data
    return data
}

export const getProductByCategories= async () =>{
    const response = await axios.get(`https://fakestoreapi.com/products/category/electronics`)  
    const data = response.data
    return data
}

export const getJeweleryByCategories= async () =>{
    const response = await axios.get(`https://fakestoreapi.com/products/category/jewelery`)  
    const data = response.data
    return data
}
export const getMenByCategories= async () =>{
    const response = await axios.get(`https://fakestoreapi.com/products/category/men's%20clothing`)  
    const data = response.data
    return data
}


export const getWomenByCategories= async () =>{
    const category = 'women clothing';
    const response = await axios.get(`https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`)  
    const data = response.data
    return data
}
