import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'

const Input = () => {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const {setUser} = useContext(UserContext)

  const handleSubmit = ()=>{
    event.preventDefault()
    if(!userName){
      console.log("name field is required")
    } else{
      setUser(userName)
    }
  }

  const {user} = useContext(UserContext)
  return (
    <>
    <input type='text' value={userName} onChange={(e)=>setUserName(e.target.value)} placeholder='user name' />
    <br />
    <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' />
    <button onClick={handleSubmit}>login</button>

    </>
  )
}

export default Input