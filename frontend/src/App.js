import React from 'react'
import Layout from './Components/Layout'
import Login from './Components/Login'
import Users from './Components/Users'
import { StateProvider } from './context/StateProvider'

const App = () => {
  return (
    <div>
      <StateProvider>
        <Layout>
        </Layout>
        <Login/>
        <Users/>
      </StateProvider>
    </div>
  )
}

export default App
