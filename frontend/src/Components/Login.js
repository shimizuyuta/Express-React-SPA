import React from 'react'

const Login = () => {
  return (
    <div>
      <h1>Express-React</h1>
      <h1>login</h1>
      <div>
        <label htmlFor="username">
          username
        </label>
        <input type="text"
           id="username"
           placeholder="UserName"
           autoFocus={true}
           className=""
           />
      </div>
      <div>
        <label htmlFor="password">
          username
        </label>
        <input type="text"
          id="password"
          placeholder="Password"
          className=""
        />
        <p>please choose a password</p>
        <div>
          <button type="button">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login
