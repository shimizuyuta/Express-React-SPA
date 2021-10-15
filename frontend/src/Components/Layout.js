import React from 'react'
import { useStateContext } from '../context/StateProvider'

const Layout = ({children}) => {
  const {serviceName} = useStateContext()

  return (
    <div>
      {serviceName}    
    </div>
  )
}

export default Layout
