import React, { useState } from "react";
import { postReq } from "./dataReq";
import { getReq } from "./dataReq";

var URLgen: React.SetStateAction<string> | null = null;
// Formulärobjekt
// Tror att denna skall flyttas till en egen klass, då man kan göra såna och de verkar coola.
// Då får man lite objekt-orienterad funktionalitet som vi saknar här.
// Så har de gjort i denna tutorialen https://reactjs.org/docs/forms.html
// Tänker att man kke flyttar varje sån klass till sin egen fil, som importeras här, och sammanställs i "App"
// funktionen ovan.
export default function Form(props: any) {
  const [password, setPassword] = useState("");
  const [expiryDate, setExpiryDate] = useState(30);
  const [maxViews, setMaxViews] = useState(50);
  const [passwordURL, setPasswordURL] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    //alert("Inputs: "+password+", "+expiryDate+", "+maxViews);
    URLgen = await postReq(password, expiryDate, maxViews);
    alert("URL: " + URLgen);
    setPasswordURL(URLgen);

    //Example of how to run GET request
    /* 
      const getPass = await getReq( ENTER ID IN LINK HERE );
      alert("Password: " +getPass);
      */
  };

  let sendMail = () => {
    const mailto: string =
      "mailto:?subject=Ditt%20l%C3%B6senord&body=Hej%2C%0A%0AH%C3%A4r%20kommer%20ditt%20l%C3%B6senord.%20%0AV%C3%A4nligen%20klicka%20p%C3%A5%20l%C3%A4nken%20nedan%20f%C3%B6r%20att%20h%C3%A4mta%20det.%20Denna%20l%C3%A4nk%20kan%20bara%20brukas%20en%20g%C3%A5ng.%0A%0A" +
      URLgen +
      "%0A%0AMed%20v%C3%A4nliga%20h%C3%A4lsningar%2C%0ADialect%20Support";
    window.location.href = mailto;
  };

    return (
      <div className="Content">

        <form onSubmit={handleSubmit}>
          <br/>
          <p>Lösenord</p><br/>
          <input className="textField" type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <br/>
          <br/>
          
          <p>Inaktivera länk och ta bort lösenord efter: </p><br/>
          <input className="rangeSlider" min="1" max="60" type="range" value={expiryDate} onChange={(e) => setExpiryDate(e.target.valueAsNumber)}/> 
          <p>{expiryDate} dagar</p>
          <br/>
  
          <input className="rangeSlider" min="1" max="100" type="range" value={maxViews} onChange={(e) => setMaxViews(e.target.valueAsNumber)}/>
          <p>{maxViews} visningar</p>
          <br/>
          <p>(vad som än kommer först)</p>
          <br/>
  
          <input className="submitButton" type="submit" value="Skapa länk"/>
      </form>

      <br />
      <div className="horizontalLine"></div>
      <br />

      <p>Din delningslänk är:</p>
      <textarea readOnly className="textArea smaller" rows={1} value={passwordURL}></textarea>

      <button onClick={sendMail}>Skicka mail</button>
      
    </div>
  );
}
