import axios from 'axios';
import React ,{useEffect,useState,useRef}from 'react'
import { useHistory } from 'react-router'
import { useStateContext } from '../context/StateProvider'

const Login = () => {
  const history = useHistory();
  const {isLogin,setIsLogin} = useStateContext()
  const nameRef = useRef(null);
  const passRef = useRef(null);
  const [value,setValue] = useState({
    username:'',
    password:''
  })

  const handleSubmit = (e) =>{
    e.preventDefault()

    console.log('submit',e.target)
    console.log('submit',e.currentTarget.value)
    console.log('submit',e.target.value)
    console.log('submit',e.target.username)
    console.log(nameRef.current.value)
    console.log('value',value)
    const { email, password } = e.target.elements;
    console.log('email',email)
    axios.post('http://localhost:3001/api/v1/login')
    .then((e)=>{
      console.log(e.data,'aaaa')
      // setValue({
      //   username:'',
      //   value:''
      // })
    })

  }

  const handleChange = (event) =>{
    console.log(event.target)
    const {name,value} = event.target
    setValue((prevState)=>{
      return{
        ...prevState,
        [name]:value
      }
    })
  }

  useEffect(() => {
    if(isLogin){
      history.push('/')
    }
  
  })

  return (
    <div>
      <h1>Express-React</h1>
      <h1>login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">
            username
          </label>
          <input type="text"
             name="username"
             placeholder="UserName"
             autoFocus={true}
             className=""
             value={value.username}
             onChange={handleChange}
             ref={nameRef}
             />
        </div>
        <div>
          <label htmlFor="password">
            password
          </label>
          <input type="text"
            name="password"
            placeholder="Password"
            className=""
            value={value.password}
            onChange={handleChange}
            ref={passRef}
          />
          <p>please choose a password</p>
          <div>
            <button type="submit">Login</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
