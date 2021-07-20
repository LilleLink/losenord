import React, { useState } from 'react'
import imgURL from '../assets/Dialect_ByLine2020_White_Coral.png';

export function DialectHeader(props : any) {
    return (
        <header>
            <img src={props.imagePath}/>
        </header>
    )
}
  
export function DialectFooter(props : any) {
    return (
    
        <div className="footerWrapper">
            <footer>
                <a href="https://dialect.se">Dialect.se</a> | <a href="mailto:support@dialect.se">support@dialect.se</a> | <a href="tel:+4620555555">020-55 55 55</a>
                <br/><img src={imgURL}/>
            </footer>
        </div>

    )
}