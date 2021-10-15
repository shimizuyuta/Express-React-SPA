import { createContext,useContext,useState } from "react";

const StateContext = createContext({})

export const StateProvider = ({children}) =>{

  const serviceName = 'express-react'
  const [isLogin,setIsLogin] = useState(true)

  console.log(children,'children____')
  return(
    <StateContext.Provider value={{serviceName,isLogin,setIsLogin}}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)