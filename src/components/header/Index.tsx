import React from 'react';
import './style.scss';

import Category from '../category/Index';

import iconPhone from '../../images/phone.svg';
import iconEmail from  '../../images/email.svg';
import iconLocation from '../../images/location.svg';
import iconMoneySign from  '../../images/moneySign.svg';
import iconUser from '../../images/user.svg';
import iconHeart from '../../images/heart.svg';
import iconShopCart from '../../images/shopCart.svg';

export default function Header(){
    return(
        <>
        <div className="infos">
            <img src={iconPhone} alt="icone de telefone" />
            <p>(XX)XXXXX-XXXX</p>
            <img id="imgEmail" src={iconEmail} alt="icone de email" />
            <p>email@email.com</p>
            <img id="imgLocation" src={iconLocation} alt="icone de localização" />
            <p id="separator">Localização</p>
            <img src={iconMoneySign} alt="icone de cifrão" />
            <p id="imgMoney">R$</p>
            <img src={iconUser} alt="icone de usuário" />
            <p id="imgUser">Minha conta</p>
        </div>
        <div className="header">
            <h1>icon/image</h1>
            <input type="text" placeholder="pesquise por algum produto" />
            <button type="button">Pesquisar</button>

            <div className="favorites">
                <span>contador</span>
                <img src={iconHeart} alt="icone de favoritos" />
                <p>Seus favoritos</p>
            </div>

            <div className="shopCart">
                <span>contador</span>
                <img id="imgCart" src={iconShopCart} alt="icone de carrinho de compra" />
                <p>Carrinho</p>
            </div>   
        </div>
        <div id="line"></div>
        </>
    )
}