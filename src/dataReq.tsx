import React, { useEffect, useState, } from 'react';

//Runs the POST request towards the backendpw site. Variables are set through postReq function
async function http<T>(
  request: RequestInfo
): Promise<T> {
  const response = await fetch(request);
  const body = await response.json();
  //console.log(body)
  return body;
}

export async function getReq(idPass: string) {

  interface GETdataFormat {
    payload: string,
    expired: boolean,
    days_remaining: number,
    views_remaining: number,
    first_view: boolean,
    deleted: boolean,
  }

  const URLfget = "https://cors.dialekt.it/https://backendpw.dialekt.it/p/" + idPass + ".json"

  console.log(URLfget)

  //Calls "http" function with data that is needed for correct response
  const response = await http<GETdataFormat>(
    new Request(
      URLfget,
      {
        method: "GET",
        headers: { 'Accept': 'application/json' },
      }
    )
  );

  return(
    response.payload
  )
}


//Function called from App.tsx. Gets called when handleSubmit runs
export async function postReq(payload: string, expire_after_days: number , expire_after_views: number,) {

  //Specifies what data is needed from the response
  interface POSTdataFormat {
    url_token: string
  }

  //Calls "http" function with data that is needed for correct response
  const response = await http<POSTdataFormat>(
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