
import Header from '../components/header/Index'
import Footer from '../components/footer/Index'

import iconEmail from '../images/email.svg'

import { useState, useEffect, ChangeEvent } from 'react';

import api from '../service/api'




type Product = {
    id: number;
    name: string;
    image: string;
    price: number;
}

export default function Home() {

    const [products, setProducts] = useState<Product[]>([])
    const [email,setEmail] = useState('')

    useEffect(() => {
        api.get('').then(res => {
            setProducts(res.data)
        })
    }, [])

    function registerEmail(){
        localStorage.setItem('Email',JSON.stringify(email))
    }

    function registerProduct(id:number){
        localStorage.setItem('Product', JSON.stringify(products[id]))
    }

    const onChange=(event:ChangeEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value);

    }

    return (
        <>
            <Header />
            <h1 id="category">Notebooks</h1>
            <div className="content">
                {products.map(prod => (
                    <div key={prod.id} className="card">
                        <img src={prod.image} alt="imagem do produto" />
                        <p id="productName">{prod.name}</p>
                        <p id="productPrice"> ${prod.price},00</p>
                        <span></span>
                        <button type="button" onClick={()=>registerProduct(prod.id-1)}>Comprar</button>
                    </div>
                ))}
            </div>

            <p id="separator"></p>

            <div className="newsletter">
                <h1>Cadastre seu email para receber novidades</h1>
                <div className="register">
                    <input type="text" placeholder="Escreva seu email" value={email} onChange={onChange} />
                    <button type="button" onClick={registerEmail}> <img src={iconEmail} alt="icone de email"/> Cadastrar</button>
                </div>
            </div>
            <Footer />
        </>
    )
}