import React, { useState } from 'react'
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from "react-router-dom";
import './App.css'

// Huvud "Appen" där allt laddas in. T.ex. formulärobjektet med "<Form/>"
function App() {

  return (
    <div className="App">
      <header>
        <img src="assets\Dialect_Logotyp2020_White_Coral@2x.png"></img>
      </header>
    
    <Form/>

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

  const handleSubmit = (e : React.FormEvent) => {
    e.preventDefault();
    alert(password);
  }

  return (
    <div className="Form">
      <div id="information">
        <p>Detta är en tjänst för att kunna skicka lösenord via chatt/mail utan att behöva 
          skriva de i klartext.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Lösenord <br/>
          <input className="textField" type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
          <br/>
          <br/>
        <input className="submitButton" type="submit" value="Generera länk"/>
      </form>
    </div>
  )

}


// KOD SOM KOM MED I MALLEN JAG KLONADE
/*
<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>Hello Vite + React!</p>
<p>
  <button type="button" onClick={() => setCount((count) => count + 1)}>
    count is: {count}
  </button>
</p>
<p>
  Edit <code>App.tsx</code> and save to test HMR updates.
</p>
<p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
  {' | '}
  <a
    className="App-link"
    href="https://vitejs.dev/guide/features.html"
    target="_blank"
    rel="noopener noreferrer"
  >
    Vite Docs
  </a>
</p>
</header>
*/


export default App
