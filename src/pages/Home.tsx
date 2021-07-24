import React from 'react';

import Header from '../components/header/Index'
import Card from '../components/card/Index'
import { useState, useEffect } from 'react';

import { getProducts } from 'src/service/api';
import axios from 'axios';


export default function Home(){
    const computador='Computador'
    const smartphone='Smartphone'
    const camera='Câmera'
    const notebook='Notebook'

     //utilizar esse estado como contexto, dessa forma carrega o json globalmente. E possivel fazer um .map nos buttons e listar usando os tipos de produto no json (smartphones, computadores, etc). passa o tipo de produto como props para o "card". De dentro do card, importa o contexto(product) 
    const [type, setType]=useState('Smartphone');



    function handleType(props:string){                
        setType(props)   
    }

    return(
        <>
            <Header />
            <ul className="category">
                <button onClick={()=>handleType(smartphone)}>{smartphone}</button>
                <button onClick={()=>handleType(notebook)}>{notebook}</button>
                <button onClick={()=>handleType(camera)}>{camera}</button>
            </ul> 
            <p id="lastLine"><span></span></p>

            <div className="products">
                <Card TypeProduct={type} />
            </div>
        </>
    )
}