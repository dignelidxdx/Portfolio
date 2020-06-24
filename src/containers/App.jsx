import React from 'react';
import Header from '../components/Header';
import Presentation from '../components/Presentation';
import Skills from '../components/Skills';
import Project from '../components/Project';
import WorkExperience from '../components/WorkExperience';
import Education from '../components/Education';
import Workshop from '../components/Workshop';
import Certificate from '../components/Certificate';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';

const App = () => (
  <div className='App'>
    <Header />
    <Presentation />
    <Skills />
    <Project />
    <WorkExperience />
    <Education />
    <Workshop />
    <Certificate />
    <Footer />
  </div>
);

export default App;
