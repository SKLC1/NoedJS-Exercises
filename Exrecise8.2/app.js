
import http, { request } from 'http'


   const request = http.request('http://cat-fact.herokuapp.com/facts',(response)=>{
    let data = '';  
      response.on('data',chunk=>{
        data = data + chunk.toString()
        console.log(chunk);
      })
      response.on('end',()=>{
        const body = JSON.parse(data)
        console.log(body);
      })
    })
request.end()
//not done