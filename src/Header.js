import React, { useState, useEffect } from 'react'
import "./HeroSection.css"; // existing hero styles
import "./Header.css"; // new header styles
import { NavLink, useLocation } from 'react-router-dom';
import logo from './images/logo.png';


function Header() {
  const location = useLocation();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hideThreshold = 80; // px before header will hide
    let lastScroll = window.scrollY;
    let ticking = false;
    let hideTimer = null;

    const update = () => {
      const current = window.scrollY;
      // if scrolling down and past threshold, schedule hide; if scrolling up, show immediately
      if (current > lastScroll && current > hideThreshold) {
        // start a short timer so tiny scrolls don't hide header immediately
        if (!hideTimer) {
          hideTimer = setTimeout(() => {
            setVisible(false);
            hideTimer = null;
          }, 120); // 120ms delay
        }
      } else {
        // scrolling up -> cancel hide and show header
        if (hideTimer) {
          clearTimeout(hideTimer);
          hideTimer = null;
        }
        setVisible(true);
      }
      lastScroll = current <= 0 ? 0 : current;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, []);

  return (
    <header className={`navbar ${location.pathname === "/" ? "transparent" : ""}`}>
      <nav className={`site-navbar py-3 ${visible ? 'nav-visible' : 'nav-hidden'}`}>
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
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
