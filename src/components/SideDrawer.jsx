import React from 'react';
import '../assets/styles/components/SideDrawer.scss';

const SideDrawer = (props) => (

  <nav className='side-drawer'>
    <ul>
      <li>
        <a href='/'>Skills</a>
      </li>
      <li>
        <a href='/'>Proyectos</a>
      </li>
      <li>
        <a href='/'>Experiencia</a>
      </li>
      <li>
        <a href='/'>Contáctame</a>
      </li>
    </ul>
  </nav>
);

export default SideDrawer;
