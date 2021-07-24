import axios from 'axios';
import React, { useEffect, useState } from 'react';

import './style.scss'

// type InfosProducts={
//     Product: Products[]
//     typeProduct:string
// }

type TypeProducts={
    TypeProduct:string
}

export default function Card(props:TypeProducts){

    const [product, setProduct]=useState<any>([]);
    let products:string[]

    async function fetchProduct(){
        const res=await axios.get('https://my-json-server.typicode.com/viniciusPacio/ecommerce/produtos',)   
        setProduct(res.data);
    }
  

    function handleFilter(){
        let i
        for(i=0;i<=products[i].length;i++){
            if(product[i]?.typeProduct===props.TypeProduct)
                products=product[i]
        }
        console.log(products);
        
    }

    useEffect(() =>{
        fetchProduct();     
        handleFilter();
        
    },[])


    return (
        <>
        {handleFilter}
   
            {/* {products.map(prod=>{
                return(
                    <ul>
                        <li>{prod.}</li>
                    </ul>
                )
            })} */}
            {/* <div className="card">
                <img src="" alt="" />
                <button>fav</button>
                <p>name</p>
                <p>price</p>
                <p>rating</p>
                <button>buy</button>
            </div> */}
        
        </>
    )

}