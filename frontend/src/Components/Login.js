import axios from 'axios';
import React ,{useEffect,useState,useRef}from 'react'
import { useHistory } from 'react-router'
import { useStateContext } from '../context/StateProvider'
import  {Button,TextField,Card,Grid, Container, CssBaseline, Typography} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


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
    console.log(nameRef.current.value)
    console.log('submit',e.target)
    console.log(nameRef.current.value)
    console.log('value',value)
    const username = nameRef.current.value
    const password = passRef.current.value
    setValue({...value,username:username,password:password})

    axios.post('http://localhost:3001/api/v1/login',value)
    .then((e)=>{
      console.log(e.data,'aaasa')
      // setValue({
      //   username:'',
      //   value:''
      // })
    })

  }

  const handleChange = (event) =>{
    const {name,value} = event.target
    console.log(event.target,'fafafafa')
    console.log('name',name)
    console.log('value',value)
    setValue((prevState)=>{
      console.log('prevstate',prevState)
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

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme} >
      <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <Box
          sx={{
            marginTop:8,
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">sigin up</Typography>
          <Box component="form" sx={{mt:4}} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="username"
                  required
                  fullWidth
                  label="username"
                  value={value.username}
                  ref={nameRef}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  required
                  fullWidth
                  label="password"
                  value={value.password}
                  ref={nameRef}
                  onChange={handleChange}
                />
              </Grid>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                sx={{m:1,mt:2}}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 1, mx: "auto", ml:2}}
              >sign in 
              </Button>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default Login
