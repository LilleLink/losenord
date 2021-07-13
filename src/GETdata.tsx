import React from 'react';

function getReq() {
  fetch('https://linus.dialekt.it/https://losenord.dialect.it/p/xtwcdmvuhgx7t7r1.json', {
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