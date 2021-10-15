import React,{useState,useEffect} from 'react'
import axios from 'axios'
const Users = () => {
  const [users,setUsers] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3001/api/user')
    .then(res=>{
      setUsers(res.data)
      console.log(res.data)
    })
    .catch(e=>console.log(e.message))
  },[])

  return (
    <div>
      {users.map((user)=>(
        <ul key={user.id}>
          <li>{user.name}</li>
        </ul>
      ))}
    </div>
  )
}

export default Users
