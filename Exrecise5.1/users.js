import * as fs from 'fs';
import uniqid from 'uniqid'

export const getUsers = () =>{
  
}
const saveUsers =(users)=>{
  const dataJSON = JSON.stringify(users)
  fs.writeFileSync('./Exrecise5.1/users.json', dataJSON)
}
const loadUsers = () =>{
  try{
    const dataBuffer = fs.readFileSync('./Exrecise5.1/users.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

export const addUser = (name, email) =>{
  const users = loadUsers()
  const duplicateUsers = users.filter(user=>user.email === email) //find is better becuase it will stop
  if(duplicateUsers.length === 0){
    users.push({
      name: name,
      email: email,
      id: uniqid(),
    })
    saveUsers(users)
    console.log(users);
  } else {
    console.log('email is taken');
    return
  }
}

const deleteUser =(id)=>{
  const users = loadUsers()
  const filteredUsers = users.filter((user) => user.id !== id) 
  if(users.length !== filteredUsers.length){
    saveUsers(filteredUsers)
    console.log(users);
  } else {
    console.log('no user with that specific id');
  }
}

const updateUser =(id,name,email)=>{
  const users = loadUsers()
  const userIndex = users.findIndex((user)=>user.id === id)
  if(userIndex!== -1){
    const updatedUser = { ...users[userIndex] , name, email }
    users[userIndex] = updatedUser;
    saveUsers(users)
  } else {
    console.log('no user with that specific id');
  }
}
//? activations
// addUser('eli','eli993@gmail.com')
// deleteUser()
updateUser('fk5rdu1r1kl4cm4s1k','jese','emia@changed')