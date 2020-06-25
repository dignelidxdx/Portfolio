/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../assets/styles/components/Footer.scss';
import logo from '../assets/static/user-woman.png';
import whatsapp from '../assets/static/003-whatsapp.png';
import linkedin from '../assets/static/linkedin.png';
import github from '../assets/static/github.png';

const Footer = () => (
  <footer className='Footer'>
    <div className='Footer-container'>
      <div className='logo--Footer'>
        <img src={logo} />
      </div>
      <nav className='nav--Footer'>
        <ul>
          <li><a href='#'>About me</a></li>
          <li><a href='#'>Skills</a></li>
          <li><a href='#'>Proyectos</a></li>
          <li><a href='#'>Experiencia</a></li>
          <li><a href='#'>Contáctame</a></li>
        </ul>
      </nav>
      <div className='nav--social'>
        <ul>
          <li>Follow Me</li>
          <img className='Footer-img' src={whatsapp} alt='number cellphone' />
          <img className='Footer-img' src={linkedin} alt='linkedin' />
          <img className='Footer-img' src={github} alt='github' />
        </ul>
      </div>
    </div>

  </footer>
);

export default Footer;
