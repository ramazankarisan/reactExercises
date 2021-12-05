import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Navbar() {
  return (
    <div className="navbar">
      <h2>About Me</h2>
      <ul>
        <li><Link to="/me">Me </Link></li>
        <li className="liElem"><Link to="/hobbies">Hobbies </Link></li>
        <li><Link to="/contact">Contact</Link></li>

      </ul>
    </div>
  )
}

export default Navbar
