import React, { useState } from 'react'
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from "react-router-dom";
import './App.css'
import { postReq } from './dataReq';
import { getReq } from './dataReq';

// Huvud "Appen" där allt laddas in. T.ex. formulärobjektet med "<Form/>"
function App() {

  return (
    <div className="App">

      <DialectHeader imagePath="assets\Dialect_Logotyp2020_White_Coral.png"/>

      <main>
        <Form/>
      </main>

      <div className="footerWrapper">
        <DialectFooter/>
      </div>

    </div>
  )
}


// Formulärobjekt
// Tror att denna skall flyttas till en egen klass, då man kan göra såna och de verkar coola.
// Då får man lite objekt-orienterad funktionalitet som vi saknar här.
// Så har de gjort i denna tutorialen https://reactjs.org/docs/forms.html
// Tänker att man kke flyttar varje sån klass till sin egen fil, som importeras här, och sammanställs i "App" 
// funktionen ovan.
function Form(props : any) {

  const [password, setPassword] = useState("");
  const [expiryDate, setExpiryDate] = useState(30);
  const [maxViews, setMaxViews] = useState(50);

  const handleSubmit = (e : React.FormEvent) => {
    e.preventDefault();
    alert("Inputs: "+password+", "+expiryDate+", "+maxViews);
    const URLgen = postReq(password, expiryDate, maxViews);
    console.log(URLgen);
  }

  return (
    <div className="Form">
      <div id="information">
        <p>Detta är en tjänst för att kunna skicka lösenord via chatt/mail utan att behöva 
          skriva de i klartext.<br/>
          Fyll i formuläret nedan och tryck sedan på "Skapa länk" för att generera en mailbar länk</p>
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

function DialectHeader(props : any) {

  return (
    <header>
      <img src={props.imagePath}/>
    </header>
  )

}

function DialectFooter(props : any) {
  return (
    <footer>
      <a href="https://dialect.se">Dialect.se</a> | <a href="mailto:support@dialect.se">Maila supporten</a> | <a href="tel:+46500105350">Ring supporten</a>
    </footer>
  )
}

export default App
