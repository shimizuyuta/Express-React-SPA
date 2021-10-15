import React from 'react'
import Layout from './Components/Layout'
import Users from './Components/Users'
import { StateProvider } from './context/StateProvider'

const App = () => {
  return (
    <div>
      <StateProvider>
        <Layout>
          
        </Layout>
        <Users/>
      </StateProvider>
    </div>
  )
}

export default App
