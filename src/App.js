import React,{useContext} from 'react'
import Body from './Component/Body'
import Header from './Component/Header'
import Home from './Component/Home'
import Login2 from './Demo/Login2'
import Login from './Pages/Auth/Login'
import HomeRoutes from './Routes/HomeRoutes'
import { UserContext } from './Context/UserContext'

const App = () => {

  const { userData, setUserData, userLoading, setUserLoading } = useContext(UserContext)

  return (
    <>
    <Body />  
    </>
  )
}

export default App