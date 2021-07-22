import React, { useState } from 'react'
import imgURL from '../assets/smalllogo.png';

export function DialectHeader(props : any) {
    return (
        <header>
            <a href="https://losenord.dialect.it">
                <img src={props.imagePath}/>
            </a>
        </header>
    )
}
  
export function DialectFooter(props : any) {
    return (
    
        <div className="footerWrapper">
            <footer>
                <div className="row footerlogo">
                    <img src={imgURL}/>
                </div>
                <div className="row">
                    <p>Epost:</p>
                    <a href="mailto:support@dialect.se">support@dialect.se</a>
                    <p>Vardagar 07.00 - 17.00</p>
                </div>
                <div className="row">
                    <p>Telefon:</p>
                    <a href="tel:020-555555">020-55 55 55</a>
                    <p>Vardagar 07.00 - 17.00</p>
                </div>
            </footer>
        </div>

    )
}