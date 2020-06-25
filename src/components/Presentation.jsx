/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../assets/styles/components/Presentation.scss';
import profesional from '../assets/static/profesional-photo.png';
import presentation from '../assets/static/presentation.jpg';

const Presentation = () => (
  <section className='Presentation-hero'>
    <div className='Presentation-container'>
      <div className='Presentation-text'>
        <h3>
          Bienvenido! Soy
          {' '}
          <strong>Digneli Dávila</strong>
          <br />
          {' '}
          Estoy apacionada por la tecnología
          {' '}
          <br />
          {' '}
          y soy aprendiz de todas ellas.
          <br />
          {' '}
          Futura
          <strong> Frontend </strong>
          {' '}
          con HTML5, CSS3, JS
          <br />
          {' '}
          y
          <strong> Backend</strong>
          {' '}
          con Java, MySQL y Postman

        </h3>
      </div>

      <div className='Presentation_hero-img'>
        <img
          className='Presentation-bottom'
          src={presentation}
          alt=''
          width='500'
          height='300'
        />
        <img
          className='Presentation-top'
          src={profesional}
          alt=''
          width='500'
          height='300'
        />
      </div>

    </div>
  </section>

);

export default Presentation;

