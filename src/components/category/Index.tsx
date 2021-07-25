import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from 'src/context/Products';

import './category.scss'

type CategoryProducts = {
    title:string;
}



export default function Category(props: CategoryProducts) {

    const {products,setProduct}=useContext<any>(AuthContext)
    
    return (
        <>
            {console.log(products)}
        </>
    )
}