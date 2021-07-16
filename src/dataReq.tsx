import React, { useEffect, useState, } from 'react';

export function getReq() {
  fetch('https://cors.dialekt.it/https://backendpw.dialekt.it/p/xtwcdmvuhgx7t7r1.json', {
      method: 'GET',
      headers: { 'Accept': 'application/json'},
    })
      .then(res => {
        if(res.ok) {
          console.log('SUCCESSFUL')
        }
        else {
          console.log('Failed')
        }
      })
      .then(data => console.log(data))
      .catch(error => console.log('error'))
}

//Runs the POST request towards the backendpw site. Variables are set through postReq function
export async function http<T>(
  request: RequestInfo
): Promise<T> {
  const response = await fetch(request);
  const body = await response.json();
  //console.log(body)
  return body;
}

//Function called from App.tsx. Gets called when handleSubmit runs
export async function postReq(payload: string, expire_after_days: number , expire_after_views: number,) {

  //Specifies what data is needed from the response
  interface dataFormat {
    url_token: string
  }

  //Calls "http" function with data that is needed for correct response
  const response = await http<dataFormat>(
    new Request(
      "https://cors.dialekt.it/https://backendpw.dialekt.it/p.json",
      {
        method: "post",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
          password:{
          "payload": payload, 
          "expire_after_days": expire_after_days, 
          "expire_after_views": expire_after_views
          }
        })
      }
    )
  );

  //Creates an URL to send back
  return(
    'https://losenord.dialect.it/p/' + response.url_token
  )
}