import React,{useEffect} from 'react'
import { useHistory, useLocation } from 'react-router'
import { useStateContext } from '../context/StateProvider'
import { Link } from 'react-router-dom'

const Layout = ({children}) => {
  const {serviceName,isLogin} = useStateContext()
  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    if(!isLogin)history.push('/login')
  })


  return (
    <div className="">
      <header className="">
        <nav className="">
          <div className="">
            <div className="">
              <span className="">
                {serviceName}!!
              </span>
              <Link to="/" className="">
                Root
              </Link>
              <Link to="/" className="">
                ComponentA
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      {location.pathname === '/' ? null : <Link to="/">Top</Link>}
      <footer className="">
        <div className="">
          <p className="">{serviceName}@2021</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
