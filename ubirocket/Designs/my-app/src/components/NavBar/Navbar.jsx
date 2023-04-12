import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
	<li>
	  <Link to="/Upcoming">Upcoming</Link>
	</li>
	<li>
	  <Link to="/Favorites">Favorites</Link>
	</li>
  </ul>
</nav>
  )
}
