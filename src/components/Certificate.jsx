/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../assets/styles/components/Certificate.scss';
import mysql from '../assets/static/diploma-sql-mysql-1.png';
import ingenieria from '../assets/static/diploma-ingenieria-1.png';
import react from '../assets/static/diploma-react-ejs-1.png';
import frontend from '../assets/static/diploma-frontend-developer-1.png';
import scrum from '../assets/static/diploma-scrum-1.png';
import postman from '../assets/static/diploma-postman-1.png';

const Certificate = () => (
  <section className='Certificate'>
    <h4 className='Certificate-ability'>Certificados</h4>
    <hr />
    <div className='Certificate-carousel'>
      <div className='Certificate-container'>
        <div className='carousel-item'>
          <img className='carousel-item__img' src={mysql} alt='woman' />
          <div className='carousel-item__details'>
            <div>
              <img src='/img/icons8-me-gusta-64.png' alt='' />
              <img src='/img/icons8-me-gusta-64.png' alt='' />
            </div>
            <p className='carousel-item__details--title'>MySQL</p>
            <p className='carousel-item__details--subtitle'>2019 +20horas</p>
          </div>
        </div>
        <div className='carousel-item'>
          <img className='carousel-item__img' src={ingenieria} alt='woman' />
          <div className='carousel-item__details'>
            <div>
              <img src='/img/icons8-me-gusta-64.png' alt='' />
              <img src='/img/icons8-me-gusta-64.png' alt='' />
            </div>
            <p className='carousel-item__details--title'>MySQL</p>
            <p className='carousel-item__details--subtitle'>2019 +20horas</p>
          </div>
        </div>
        <div className='carousel-item'>
          <img className='carousel-item__img' src={react} alt='woman' />
          <div className='carousel-item__details'>
            <div>
              <img src='/img/icons8-me-gusta-64.png' alt='' />
              <img src='/img/icons8-me-gusta-64.png' alt='' />
            </div>
            <p className='carousel-item__details--title'>MySQL</p>
            <p className='carousel-item__details--subtitle'>2019 +20horas</p>
          </div>
        </div>
        <div className='carousel-item'>
          <img className='carousel-item__img' src={frontend} alt='woman' />
          <div className='carousel-item__details'>
            <div>
              <img src='/img/icons8-me-gusta-64.png' alt='' />
              <img src='/img/icons8-me-gusta-64.png' alt='' />
            </div>
            <p className='carousel-item__details--title'>MySQL</p>
            <p className='carousel-item__details--subtitle'>2019 +20horas</p>
          </div>
        </div>
        <div className='carousel-item'>
          <img className='carousel-item__img' src={postman} alt='woman' />
          <div className='carousel-item__details'>
            <div>
              <img src='/img/icons8-me-gusta-64.png' alt='' />
              <img src='/img/icons8-me-gusta-64.png' alt='' />
            </div>
            <p className='carousel-item__details--title'>MySQL</p>
            <p className='carousel-item__details--subtitle'>2019 +20horas</p>
          </div>
        </div>
        <div className='carousel-item'>
          <img className='carousel-item__img' src={scrum} alt='woman' />
          <div className='carousel-item__details'>
            <div>
              <img src='/img/icons8-me-gusta-64.png' alt='' />
              <img src='/img/icons8-me-gusta-64.png' alt='' />
            </div>
            <p className='carousel-item__details--title'>MySQL</p>
            <p className='carousel-item__details--subtitle'>2019 +20horas</p>
          </div>
        </div>
      </div>
    </div>
  </section>

);

export default Certificate;
