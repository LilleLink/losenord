import React, { useState } from 'react'
import { BrowserRouter as Router, Link, Switch, Route, Redirect, useParams } from "react-router-dom";
import Form from './Form';
import './App.css'
import {DialectHeader, DialectFooter} from './DialectProps';
import PasswordRetriever from './PasswordRetriever';
import imgURL from '../assets/dialogo.png';

// Huvud "Appen" där allt laddas in. T.ex. formulärobjektet med "<Form/>"
function App() {

  return (
    <Router>
        <Switch>
          <Route path="/p/:id" component={GetPassword}/>
          <Route path="/" component={PostPassword}/>
        </Switch>
    </Router>
  )
}


function PostPassword() {

  return (
    <div className="App">
      <DialectHeader imagePath={imgURL}/>

      <main>
        <Form/>
      </main>

      <DialectFooter/>
      
    </div>
  )
}

function GetPassword() {

  const {id} : any = useParams();
  
  return (
    <div className="App">
      <DialectHeader imagePath={imgURL}/>

      <main>
        <PasswordRetriever id={id}/>
      </main>

      <DialectFooter/>
      
    </div>  
  )

}

export default App
