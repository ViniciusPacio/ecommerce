import axios from 'axios';
import React, { useEffect, useState } from 'react';

import './category.scss'

type CategoryProducts = {
    title:string;
}



export default function Category(props: CategoryProducts) {

    const [product, setProduct]=useState<any>([]);

    async function fetchProduct(){
        const res=await axios.get('https://my-json-server.typicode.com/viniciuspacio/ecommerce/db')   
        setProduct(res.data);   
    }

    useEffect(() =>{
        fetchProduct();  
    },[])
    
    return (
        <>
            {/* {console.log(products)} */}
        </>
    )
}