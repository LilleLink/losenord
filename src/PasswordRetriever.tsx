import React, { useState } from 'react'
import { postReq } from './dataReq';
import { getReq } from './dataReq';

export default function PasswordRetriever(props : any) {

    const [areaText, setAreaText] = useState("");
    const [boxClicked, setBoxClicked] = useState(false);
    const id : string = props.id; 

    async function getPassword(e : any) {
        const password : string = await getReq(id);
        setAreaText(password);
        e.target.value = password;
        setBoxClicked(true);
    }

    function copyToClipboard() {
        navigator.clipboard.writeText(areaText);
    }

    function CopyButton() {
        return (
            <div>
                <button className="button" onClick={copyToClipboard}>Kopiera lösenord</button>
            </div>
        )
    }

    return (
        <div className="Content">
            <h2>Klicka på fältet nedan för att hämta ditt lösenord</h2>
            <input readOnly className="textField" onClick={getPassword} value={areaText}/><br/>

            {boxClicked ? <CopyButton/> : null}
            
        </div>
    )
}