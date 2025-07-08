
import React from 'react'
import { useSelector } from 'react-redux'
import {Navigate, Outlet} from 'react-router-dom'

const ProtectedRoutes = ({children}) => {
    const {token} = useSelector((state) => state.login)
    
    if (!token) {
        return <Navigate to="/login" replace /> 
    }
    return (
        <Outlet />
    )
}

export default ProtectedRoutes
