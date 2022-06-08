import React from 'react'
import './menu.scss'
import { Person, Mail } from "@material-ui/icons";

const Menu = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={`menu ${menuOpen && "active"}`}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#testimonials">Testimonials</a>
        </li>
      </ul>
      <div className="itemContainer">
        <Person className="icon" />
        <span>647-979-8407</span>
      </div>
      <div className="itemContainer">
        <Mail className="icon" />
        <span>joshua.0331@hotmail.com</span>
      </div>
    </div>
  );
}

export default Menu