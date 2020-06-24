/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import logo from '../assets/static/logo2.png';

const Header = () => (
  <div className='header'>
    <div className='menu-bar'>
      <a href='#' className='bt-menu'>
        Menu
        <p> </p>
        <span className='icon-menu' />
      </a>
    </div>
    <div className='container'>
      <div className='logo'>
        <img height='60' src={logo} alt='' />
      </div>
      <nav className='menu'>
        <ol>
          <li>
            <a href='#'>Profesional</a>
          </li>
          <li>
            <a href='#'>Práctico</a>
          </li>
          <li>
            <a href='#'>Logros</a>
          </li>
          <li>
            <a href='#'>Portafolio</a>
          </li>
        </ol>
      </nav>
    </div>
  </div>

);

export default Header;
