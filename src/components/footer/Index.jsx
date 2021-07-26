import iconEmail from '../../images/email.svg'
import iconLocation from '../../images/location.svg'
import iconPhone from '../../images/phone.svg'

import './style.scss'

export default function Footer(){
    return(
        <>
            <p id="separator2"></p>
            <div className="footer">
                <ul className="about">
                    <li id="titleAbout">Sobre</li>
                    <li id="about">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur nihil illum iste quaerat enim tenetur sit laboriosam rerum. Ipsam maxime ducimus reiciendis autem quos, officia officiis voluptates explicabo odit.                        
                    </li>
                    <li><img src={iconLocation} alt="icone de localização" /> Localização </li>
                    <li><img src={iconPhone} alt="icone de telefone" /> (XX)XXXXX-XXXX </li>
                    <li><img src={iconEmail} alt="icone de email" /> email@email.com </li>
                </ul>

                <ul className="information">
                    <li id="titleInformation">Informações</li>
                    <li>Sobre nós</li>
                    <li>Contate-nos</li>
                    <li>Políticas de privacidade</li>
                    <li>Pedidos e devoluções</li>
                    <li>Termos e condições</li>
                </ul>

                <ul className="services">
                    <li id="titleService">Serviços</li>
                    <li>Minha conta</li>
                    <li>Carrinho</li>
                    <li>Favoritos</li>
                    <li>Reastrar pedido</li>
                    <li>Ajuda</li>
                </ul>
            </div>
        </>
    )
}