import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Profile = () => {
  
  const {user} = useContext(UserContext)
  return (
    user ? user : 'user not found'
  )
}

export default Profile