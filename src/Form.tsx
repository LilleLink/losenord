import React, { useState } from 'react'
import { postReq } from './dataReq';
import { getReq } from './dataReq';

// Formulärobjekt
// Tror att denna skall flyttas till en egen klass, då man kan göra såna och de verkar coola.
// Då får man lite objekt-orienterad funktionalitet som vi saknar här.
// Så har de gjort i denna tutorialen https://reactjs.org/docs/forms.html
// Tänker att man kke flyttar varje sån klass till sin egen fil, som importeras här, och sammanställs i "App" 
// funktionen ovan.
export default function Form(props : any) {

    const [password, setPassword] = useState("");
    const [expiryDate, setExpiryDate] = useState(30);
    const [maxViews, setMaxViews] = useState(50);
  
    const handleSubmit = async (e : React.FormEvent) => {
      e.preventDefault();
      alert("Inputs: "+password+", "+expiryDate+", "+maxViews);
      const URLgen = await postReq(password, expiryDate, maxViews);
      alert("URL: " +URLgen);
  
      //Example of how to run GET request
      /* 
      const getPass = await getReq( ENTER ID IN LINK HERE );
      alert("Password: " +getPass);
      */
    }
  
    return (
      <div className="Content">
        <div id="information">
          <p>Fyll i formuläret nedan och tryck sedan på "Skapa länk" för att generera en mailbar länk.</p>
        </div>
  
        <br/>
        <div className="horizontalLine"></div>
  
        <form onSubmit={handleSubmit}>
          <br/>
          <label>Lösenord <br/>
            <input className="textField" type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </label>
          <br/>
          <br/>
          
          <label>Inaktivera länk och ta bort lösenord efter: </label><br/>
          <input className="rangeSlider" min="1" max="60" type="range" value={expiryDate} onChange={(e) => setExpiryDate(e.target.valueAsNumber)}/>
          <br/>
  
          <input className="rangeSlider" min="1" max="100" type="range" value={maxViews} onChange={(e) => setMaxViews(e.target.valueAsNumber)}/>
          <br/>
          <p>(vad som än kommer först)</p>
          <br/>
  
          <input className="submitButton" type="submit" value="Skapa länk"/>
        </form>
      </div>
    )
  
  }