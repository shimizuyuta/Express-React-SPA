import React,{useEffect} from 'react'
import { useHistory } from 'react-router'
import { useStateContext } from '../context/StateProvider'
import { Link } from 'react-router-dom'

const Layout = ({children}) => {
  const {serviceName,isLogin} = useStateContext()
  const history = useHistory()

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
      <footer className="">
        <div className="">
          <p className="">{serviceName}@2021</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
