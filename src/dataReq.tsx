import React from 'react';

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

export function postReq() {
  fetch('https://cors.dialekt.it/https://backendpw.dialekt.it/p.json', {
    method: 'POST',
    headers: { 'Accept': 'application/json'},

  },
  body: JSON.stringify({payload: 'Hej',})
  )
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
