import React, { useState } from 'react'
import { postReq } from './dataReq';
import { getReq } from './dataReq';

export function PasswordRetriever(props : any) {

    const id : any = props.id; 

    return (
        <div className="Content">
            <h2>Klicka på rutan nedan för att hämta ditt lösenord</h2>
            <textarea readOnly className="textArea" rows={1} id="textArea"></textarea>
        </div>
    )
}