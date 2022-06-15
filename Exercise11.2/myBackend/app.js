import express from 'express'
import axios from 'axios'

const app = express()
app.use(express.json())
const PORT = 5000;

app.get('/getWeatherIsrael', async(req,res) => {
  try{
    const {data} = await axios.get('https://api.weatherapi.com/v1/current.json?key=9f3f6bb9744141a0b34122830221506&q=London&aqi=no')
    res.send(JSON.stringify(data))
  } catch (e){
   console.log(e); 
  }
})

app.listen(PORT, ()=> console.log('listening on' + PORT))