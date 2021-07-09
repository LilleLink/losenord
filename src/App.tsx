import React, { useState } from 'react'
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from "react-router-dom";
import logo from './logo.svg'
import './App.css'

// Huvud "Appen" där allt laddas in
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
function Form() {

  return (
    <div className="Form">
      <div id="information">
        <p>Detta är en tjänst för att kunna skicka lösenord via chatt/mail utan att behöva skriva de i klartext.</p>
      </div>

      <form>
        <label>Lösenord: <input type="text" name="pw"></input></label>
        <button type="submit">Generera länk</button>
      </form>
    </div>
  )

}


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
