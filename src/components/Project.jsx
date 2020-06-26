/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../assets/styles/components/Project.scss';
import video from '../assets/video/mumi-presentation.mp4';
import muestra from '../assets/static/muestra-consultorio.png';

const Project = () => (
  <section className='hero'>
    <h4 className='Project-ability'>Proyectos</h4>
    <hr />
    <section className='Project-container'>
      <article className='event'>
        <figure className='event-videoContainer'>
          <video className='html-video' src={video} controls />
        </figure>
        <div className='event-detail'>
          <h3 className='event-title'>Mumi nació por una Hackaton</h3>
          <p className='event-description'>El evento fue organizado por Globant 2020, donde mas de 80 equipos participaron en una hackaron, estuve con un equipo formada por 6 chicas en programación.</p>
          <a className='event-url' href=''>Ver mas</a>
        </div>
      </article>
      <article className='event'>
        <figure className='event-imageContainer'>
          <img className='event-image' src={muestra} />
        </figure>
        <div className='event-detail'>
          <h3 className='event-title'>CMDT - Propuesta para registro de consultas</h3>
          <p className='event-description'>Tuve un cliente que me solicito un registro de consultas para pacientes, por ahora esta desarrollado en Google Spreadsheets.</p>
          <a className='event-url' href='' target='_blank'>Ver mas</a>
        </div>
      </article>
    </section>
  </section>

);

export default Project;
