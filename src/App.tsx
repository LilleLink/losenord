import React, { useState } from 'react'
import { postReq } from './dataReq';
import { getReq } from './dataReq';
import { BrowserRouter as Router, Link, Switch, Route, Redirect, useParams } from "react-router-dom";
import Form from './Form';
import './App.css'
import {DialectHeader, DialectFooter} from './DialectProps';
import { PasswordRetriever } from './PasswordRetriever';


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
      <DialectHeader imagePath="assets\Dialect_Logotyp2020_White_Coral.png"/>

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
      <DialectHeader imagePath="assets\Dialect_Logotyp2020_White_Coral.png"/>

      <main>
        <PasswordRetriever id={id}/>
      </main>

      <DialectFooter/>
      
    </div>  
  )

}

export default App
