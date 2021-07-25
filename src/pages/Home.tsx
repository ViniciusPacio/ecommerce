import React, { useContext } from 'react';

import Header from '../components/header/Index'
import Card from '../components/card/Index'
import Category from '../components/category/Index'


import { useState, useEffect } from 'react';

import { getProducts } from 'src/service/api';
import axios from 'axios';
import { AuthContext } from 'src/context/Products';


type Product={
    id: number;
    name:string;
    image:string;
    price:number;
}

export default function Home(){
    
    const [products,setProducts]=useState<any[]>([])
    
    
    const computador='Computador'
    const smartphone='Smartphone'
    const camera='Câmera'
    const notebook='Notebook'

    const [type, setType]=useState('Smartphone');

    async function fetchProduct(){
        await axios.get('https://my-json-server.typicode.com/viniciuspacio/ecommerce/db').then(res=>{
            try{
            setProducts(res.data)
            }catch (e){
                console.log(e);
                
            }
        })   
     
    }

    useEffect(() =>{
        fetchProduct();  
    },[])

    return(
        <>
            <Header />
            
            <h1>Notebooks</h1>
            
            {Object.keys(products).map(prod=>{
                console.log(prod);                
            })}
            {console.log(products)
            }

            

        </>
    )
}