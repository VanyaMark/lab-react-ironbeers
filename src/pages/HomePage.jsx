import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
    <Link to="/beers">Go to Beers</Link>
    <Link to="/random-beer">Get a Random Beer</Link>
    <Link to="/new-beer">Add New Beer</Link>
    <Link to="/search-beer">Search Beer</Link>
  </div>
  )
}

export default HomePage