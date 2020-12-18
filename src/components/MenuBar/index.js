import React from 'react'
import { Link } from 'gatsby'

const MenuBar = () => (
  <>
    <ul>
      <li>
        <Link to='/'>Home</Link>
        <Link to='/about'>Sobre Nós</Link>
        <Link to='/machine-learning'>Machine Learning</Link>
        <Link to='/data-science'>Data Science</Link>
      </li>
    </ul>
  </>
)

export default MenuBar
