import React from 'react'
import CardtextContentHero from './CardTextContentHero'
import gateau from '../General/image/gateauHero.png'
import './cardHero.scss'
function CardHero() {
    return (
        <div className='hero'>
            <div className="container_hero">
                <img src={gateau} alt="" />
                <CardtextContentHero />
            </div>
        </div>
    )
}

export default CardHero