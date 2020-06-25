/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo2.png';

const Header = (props) => (
  <div className='Header'>
    <div className='Header-container'>
      <div className='Header-logo'>
        <button className='Header_toggle-button'>
          <div className='Header_toggle-button_line' />
          <div className='Header_toggle-button_line' />
          <div className='Header_toggle-button_line' />
        </button>
        <img height='60' src={logo} alt='' />
      </div>
      <nav className='Header-menu'>
        <ol>
          <li>
            <a href='#'>Skills</a>
          </li>
          <li>
            <a href='#'>Proyectos</a>
          </li>
          <li>
            <a href='#'>Experiencia</a>
          </li>
          <li>
            <a href='#'>Contáctame</a>
          </li>
        </ol>
      </nav>
    </div>
  </div>

);

export default Header;
