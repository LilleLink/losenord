import React, { useState } from 'react'
import { postReq } from './dataReq';
import { getReq } from './dataReq';

export default function PasswordRetriever(props : any) {

    const [areaText, setAreaText] = useState("");
    const id : string = props.id; 

    async function getPassword(e : any) {
        const password : string = await getReq(id);
        setAreaText(password);
        e.target.value = password;
    }

    return (
        <div className="Content">
            <h2>Klicka på rutan nedan för att hämta ditt lösenord</h2>
            <textarea readOnly className="textArea" rows={1} onClick={getPassword}></textarea>
        </div>
    )
}