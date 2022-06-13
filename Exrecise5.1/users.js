import * as fs from 'fs';

export const getUsers = () =>{
  
}
const saveUsers =(users)=>{
  const dataJSON = JSON.stringify(users)
  fs.writeFileSync('./Exrecise5.1/users.json', dataJSON)
}
const loadUsers = () =>{
  try{
    const dataBuffer = fs.readFileSync('users.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}
const name = 'jaklle'
const email = 'jake@gmail.com'
export const addUser = (name, email) =>{
  const users = loadUsers()
  users.push({
    name: name,
    email: email,
  })
 saveUsers(users)
  console.log(users);
}
addUser(name,email)
