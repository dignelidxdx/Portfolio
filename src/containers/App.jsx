import React, { Component } from 'react';
import Header from '../components/Header';
import Presentation from '../components/Presentation';
import Skills from '../components/Skills';
import Project from '../components/Project';
import WorkExperience from '../components/WorkExperience';
import Education from '../components/Education';
import Workshop from '../components/Workshop';
import Certificate from '../components/Certificate';
import Footer from '../components/Footer';
import SideDrawer from '../components/SideDrawer';
import Backdrop from '../components/Backdrop';

import '../assets/styles/App.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sideDrawerOpen: false,
    };
  };

  componentDidMount() {
    // eslint-disable-next-line no-unused-vars
    const drawerToggleClickHandler = () => {
      this.setState((prevState) => {
        return { sideDrawerOpen: !prevState.sideDrawerOpen };
      });
    };
  }

  render() {
    let sideDrawer;
    let backdrop;

    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backdrop = <Backdrop />;
    }
    return (
      <div className='App'>
        <Header drawerClickHandler={this.drawerToggleClickHandler} />
        {sideDrawer}
        {backdrop}
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
  }

}

export default App;
