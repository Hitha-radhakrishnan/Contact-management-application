import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Header = () => {
  return (
    <div>
        <header>
        
            <nav>
            <h1>CONTAX</h1>
                <Link to="/">ALL CONTACTS</Link>
                <Link to="/login">LOGIN</Link>
                <Link to="/register">REGISTER</Link>
            </nav>
        </header>
    </div>
  )
}

export default Header