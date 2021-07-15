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

export function postReq(payload: string, expire_after_days: number , expire_after_views: number,) {

  const [postId, setPostId] = useState(null);

  useEffect(() => {
    const ReqOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({payload: payload, expire_after_days: expire_after_days, expire_after_views: expire_after_views}),
    };
    fetch('https://cors.dialekt.it/https://backendpw.dialekt.it/p.json', ReqOptions)
      .then(response => response.json())
      .then(data => setPostId(data.id));
  }, []);
  return{
    postId
  }

/*  fetch('https://cors.dialekt.it/https://backendpw.dialekt.it/p.json', {
    method: 'POST',
    headers: { 'Accept': 'application/json'},

  },
  body: JSON.stringify({payload: payload, expire_after_days, expire_after_views})
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
*/
}