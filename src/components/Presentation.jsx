/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent } from 'react';
import '../assets/styles/components/Presentation.scss';
import profesional from '../assets/static/profesional-photo.png';
import presentation from '../assets/static/presentation.jpg';
import jsPDF from 'jspdf';

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
          Estoy apasionada por la tecnología
          {' '}
          <br />
          {' '}
          y soy aprendiz de todas ellas.
          <br />
          {' '}
          Actualmente
          <strong> Frontend </strong>
          {' '}
          con HTML5, CSS3, JS, React (próximamente)
          <br />
          {' '}
          y
          <strong> Backend</strong>
          {' '}
          con Java/SpringBoot/Hibernate, MySQL y Postman.

        </h3>
      </div>

      <div className='Presentation_hero-img'>

        <img
          className='Presentation-top'
          src={profesional}
          alt=''
        />
      </div>

    </div>
  </section>

);

export default Presentation;

