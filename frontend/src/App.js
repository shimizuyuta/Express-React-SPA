import React from 'react'
import Layout from './Components/Layout'
import Login from './Components/Login'
import Root from './Components/Root'
import Users from './Components/Users'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { StateProvider } from './context/StateProvider'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <StateProvider>
          <Switch>
            <Route exact path="/login">
              <Login/>
            </Route>
            <Layout>
              <Route exact path="/">
                <Root/>
              </Route>
              <Route exact path="/users">
                <Users/>
              </Route>
            </Layout>
          </Switch>
        </StateProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
