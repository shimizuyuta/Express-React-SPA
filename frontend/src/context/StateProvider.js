import { createContext,useContext } from "react";

const StateContext = createContext({})

export const StateProvider = ({children}) =>{
  const serviceName = 'express-react'
  console.log(children,'children____')
  return(
    <StateContext.Provider value={{serviceName}}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)