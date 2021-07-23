import React from 'react';

import Header from '../components/header/Index'
import Card from '../components/card/Index'
import { useState, useEffect } from 'react';

import axios from 'axios';

export default function Home(){

    const [product, setProduct]=useState([]);

    useEffect(() =>{

    },[])

    return(
        <>
            <Header />
            <ul className="category">
                <button>Smartphones</button>
                <button>Computadores</button>
                <button>Notebooks</button>
                <button>Câmeras</button>
            </ul> 
            <p id="lastLine"><span></span></p>

            <div className="products">
                <Card />
            </div>
        </>
    )
}