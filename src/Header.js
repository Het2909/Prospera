import React, { useState, useRef, useEffect } from 'react'
import "./HeroSection.css"; // existing hero styles
import "./Header.css"; // new header styles
import { NavLink } from 'react-router-dom';
import logo from './images/logo.png';

function Header() {
  
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div>
      <nav className="site-navbar py-3">
        <div className="container-fluid">
          <div className="brand-logo">
            <a href="#">
              <img
                src={logo}
                alt="Logo"
              />
            </a>
            <div className="brand-title">Prospera</div>
          </div>

          <div className="nav-links ms-auto">
            <NavLink to={'/'} end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
            <NavLink to={'/about'} className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
            <NavLink to={'/services'} className={({ isActive }) => isActive ? 'active' : ''}>Services</NavLink>
            <NavLink to={'/contact'} className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>

            {/* user icon + dropdown */}
            <div className="user-dropdown" ref={dropdownRef}>
              <button
                className="user-btn"
                aria-haspopup="true"
                aria-expanded={open}
                onClick={() => setOpen(o => !o)}
                title="User menu"
              >
                </button>
                {/* <span className="user-icon" aria-hidden>👤</span>
              

              <div className={`user-menu ${open ? 'open' : ''}`} role="menu" aria-hidden={!open}>
                <NavLink to={'/login'} className="user-menu-item" role="menuitem">Login</NavLink>
                <NavLink to={'/register'} className="user-menu-item" role="menuitem">Register</NavLink>
              </div> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
