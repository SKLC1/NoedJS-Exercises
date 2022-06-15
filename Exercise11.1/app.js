import express from 'express'
import { addNumber, deleteNumber, editNumber } from './utils.js'

const app = express()
app.use(express.json())
const arr = [1,2,3,4,5,6]

app.get('/numbers',(req,res)=>{
  // res.send(arr)
  try{
    res.send(arr)
  } catch (e){
    console.log(e.message);
    res.status(400)
  }
})
app.post('/numbers',(req,res)=>{
  const newArr = addNumber(arr, req.body.num)
  console.log(newArr);
  res.send(newArr);
})
app.put('/numbers/:numId',(req,res)=>{
  const newArr = editNumber(arr, req.body.num, req.params.numId)
  res.send(newArr)
})
app.delete('/numbers/:num',(req,res)=>{
  const newArr = deleteNumber(arr,req.params.num)
  res.send(newArr)
})

app.listen(3000,()=>{
  console.log('listening on port 3000');
})