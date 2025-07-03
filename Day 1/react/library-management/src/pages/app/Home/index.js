import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className = "container">
        <h1>This is your Virtual Library </h1>
        <Link to="/books-list" className = "btn btn-link">Books List</Link>
        <Link to="/students-list" className = "btn btn-link">Students List </Link>
    </div>
  )
}

export default Home