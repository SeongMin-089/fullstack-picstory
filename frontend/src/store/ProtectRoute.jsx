import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './auth.store'

const ProtectRoute = ({children}) => {

    const {isAuthed} = useAuth()

  return (
    <div>ProtectRoute</div>
  )
}

export default ProtectRoute