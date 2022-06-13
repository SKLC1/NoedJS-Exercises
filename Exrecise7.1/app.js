// https://cat-fact.herokuapp.com/facts

import axios from "axios";
import fetch from 'node-fetch';


async function fetchDataAxios(){
 const { data } = await axios.get('https://cat-fact.herokuapp.com/facts')
 console.log(data)
}
// fetchDataAxios()

async function fetchFetch(){
  const res = await fetch('https://cat-fact.herokuapp.com/facts')
  console.log(res);
}
fetchFetch()