/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../assets/styles/components/Workshop.scss';

const Workshop = () => (
  <section className='hero'>
    <h4 className='habilidades'>Workshop</h4>
    <hr />
    <div className='container'>
      <h1>
        Bienvenido! Soy
        {' '}
        <strong>Digneli Dávila</strong>
        <br />
        {' '}
        Apasionada por la tecnología y aprendiz de todas ellas
        <br />
        {' '}
        Futura
        <strong>Frontend</strong>
        {' '}
        con HTML5, CSS3, JS y
        <br />
        <strong>Backend</strong>
        {' '}
        con Java, MySQL y Postman

      </h1>
      <div className='hero-img'>
        <img
          className='bottom'
          src='../images/profesional/PhotoGrid_1507756918830.jpg'
          alt=''
          width='500'
          height='300'
        />
        <img
          className='top'
          src='../images/profesional/P_20171020_095732_vHDR_Auto.jpg'
          alt=''
          width='500'
          height='300'
        />
      </div>

    </div>
  </section>

);

export default Workshop;
