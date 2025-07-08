import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/app/Home/index.js'
import BooksList from '../pages/app/BooksList/index.js'
import StudentsList from '../pages/app/StudentsList/index.js'
import StudentDetails from "../pages/app/StudentDetails/index.js"
import NotFound from '../pages/app/NotFound/index.js'
import UsersList from '../pages/app/UsersList/index.js'
import ProtectedRoutes from './ProtectedRoutes.js'
import Login from '../pages/app/Login/index.js'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path = "/login" element = { <Login />} />
      <Route element = { <ProtectedRoutes />}>
        <Route path = "/" element = { <Home />} />
        <Route path = "/users-list" element = { <UsersList />} />
        <Route path = "/books-list" element = { <BooksList />} />
        <Route path = "/all-students" element = { <Navigate replace to ="/students-list" />} />
        <Route path = "/students-list" element = { <StudentsList />} >
          <Route path = ":studentid" element = { <StudentDetails /> } />
        </Route>
      </Route>
      <Route path = "*" element = { <NotFound /> } />

    </Routes>
  );    
};

export default AppRoutes