import React from 'react';

import Header from '../components/header/Index'
import Card from '../components/card/Index'
import Category from '../components/category/Index'


import { useState, useEffect } from 'react';

import { getProducts } from 'src/service/api';
import axios from 'axios';


export default function Home(){

    const computador='Computador'
    const smartphone='Smartphone'
    const camera='Câmera'
    const notebook='Notebook'

    const [type, setType]=useState('Smartphone');

 


    function handleType(props:string){                
        setType(props)   
    }

    return(
        <>
            <Header />
            <Category title='Smartphones'/>

        </>
    )
}