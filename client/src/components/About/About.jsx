import React, { Component } from 'react';
import logo from './logo.svg';
import '.../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header-about">
          <img src={logo} className="App-logo" alt="logo" />
          
          <h1 className="App-title">About us</h1>
          <h5 className="App-title-2">Just information about creaters of this site. Small, but very smart Team</h5>
        </header>
        <p className="App-intro">
          Our  greate team isn't so big, course it is so small
        </p>
        <p className="App-title-about2">
          Not all, but a most of our members you can see on the next image:
        </p>
        <img src={window.location.origin + '/BRA_Team_2021.jpg'} width="850" height="500" alt="BRA_Team_2021"/>
      </div>
    );
  }
}

export default App;
