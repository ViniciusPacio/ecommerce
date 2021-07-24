import React from 'react';

import './style.scss'

type InfosProducts={
    nameProduct: string,
    priceProduct: number,
    ratingProduct: number,
    typeProduct:string
}

export default function Card(props:InfosProducts){
    return (
        <>
            <h1>{props.typeProduct}</h1>
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