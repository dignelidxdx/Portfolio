/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../assets/styles/components/Skills.scss';
import skillOne from '../assets/static/html-skill.png';
import skillTwo from '../assets/static/css-skill.png';
import skillThree from '../assets/static/javascript-skill.png';

const Skills = () => (
  <section className='Skills'>
    <h4 className='Skills-ability'>Skills</h4>
    <hr />
    <section className='Skills-container'>
      <div className='Skills-icon'>
        <img className='Skills_icon-img' src={skillOne} alt='' />
        <h2>HTML 5</h2>
      </div>
      <div className='Skills-icon'>
        <img className='Skills_icon-img' src={skillTwo} alt='' />
        <h2>CSS 3</h2>
      </div>
      <div className='Skills-icon'>
        <img className='Skills_icon-img' src={skillThree} alt='' />
        <h2>JavaScript</h2>
      </div>
    </section>
  </section>

);

export default Skills;
