
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import { UserContext } from './context/UserContext'
import {  useContext } from 'react'
import Input from './components/Input'
import Profile from './components/Profile'

function App() {
  
  // const {user,setUser} = useContext(UserContext)
  // console.log(user)

  return (
    <UserContextProvider>
    <h3>test</h3>
    <Input />
    <Profile />
   
    </UserContextProvider>
  )
}

export default App
