import React, { useState } from 'react'
import { postReq } from './dataReq';
import { getReq } from './dataReq';
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from "react-router-dom";
import Form from './Form';
import './App.css'
import {DialectHeader, DialectFooter} from './DialectProps';


// Huvud "Appen" där allt laddas in. T.ex. formulärobjektet med "<Form/>"
function App() {

  return (
    <Router>
        <Switch>
          <Route path="/" component={PostPassword}/>
          <Route path="/p" component={GetPassword}/>
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
  return (
    <div className="App">
      <DialectHeader imagePath="assets\Dialect_Logotyp2020_White_Coral.png"/>

      <main>

      </main>

      <DialectFooter/>
      
    </div>  
  )

}

export default App
