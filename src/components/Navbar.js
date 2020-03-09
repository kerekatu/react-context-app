import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink exact to="/" className="link" activeClassName="link--active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className="link"
            activeClassName="link--active"
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="link"
            activeClassName="link--active"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/create" className="link" activeClassName="link--active">
            Create Product
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
