import axios from 'axios';
import {useEffect, useState} from 'react'

function Weather() {
  const [weather,setWeather] = useState('')

  async function getWeather(){
    const {data} = await axios.get('http://localhost:5000/getWeatherIsrael')    
    const temp = data.current.temp_c;
    setWeather(temp)
  }
  useEffect(()=>{
    getWeather()
  },[])
  return ( 
    <div>
      <h1>The weather in London is:{weather}</h1>
    </div>
   );
}

export default Weather;