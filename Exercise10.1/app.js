import express from 'express'
import { createUser, getUsers, updateUser } from './utils';

const app = express();
const PORT = precess.env.PORT||3000;

app.get('/api/users',(req,res)=>{
  console.log('get users');
  const users = getUsers()
  res.status(200).json({users})
})
app.post('/api/users/',(req,res)=>{
  const newUser = createUser(req.body)
})
app.put('/api/users/:id',(req,res)=>{
  const {id} = req.params;
  const body = req.body;
  const updateUsed = updateUser()
  res.status(200).send(updateUsed)
})

app.listen(PORT, ()=>{
  console.log('listening on port' + PORT);
})