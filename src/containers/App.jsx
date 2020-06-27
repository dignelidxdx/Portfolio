import React, { Component, PureComponent } from 'react';
import jsPDF from 'jspdf';
import Header from '../components/Header';
import Presentation from '../components/Presentation';
import Skills from '../components/Skills';
import Project from '../components/Project';
import WorkExperience from '../components/WorkExperience';
import Education from '../components/Education';
import GeneratePDF from '../components/GeneratePDF';
import Workshop from '../components/Workshop';
import Certificate from '../components/Certificate';
import Footer from '../components/Footer';
import SideDrawer from '../components/SideDrawer';
import Backdrop from '../components/Backdrop';

import '../assets/styles/App.scss';

class App extends Component {

  // eslint-disable-next-line react/state-in-constructor
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = (e) => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className='App'>
        <Header drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <Presentation />
        <GeneratePDF />
        <Skills />
        <Project />
        <WorkExperience />
        <Education />
        <Workshop />
        <Certificate />
        <Footer />
      </div>
    );
  }

}

export default App;
