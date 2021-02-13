import React, { Component } from 'react';
import './index.scss'
import GR1 from './Images/GR-1.jpg';
import GR2 from './Images/GR-2.jpg';
import GR3 from './Images/GR-3.jpg';
import GR4 from './Images/GR-4.jpg';
import GR5 from './Images/GR-5.jpg';
import GR6 from './Images/GR-6.jpg';


class About extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header-about">
          <h1 className="App-title">About us</h1>
          <h5>Just information about creaters of this site. Small, but very smart Team</h5>
        </div>

        <p>Our  greate team isn't so big, course it is so small</p>
        <p>Not all, but a most of our members you can see on the next image:</p>
        <img src={window.location.origin + '/BRA_Team_2021.jpg'} className='image' alt="BRA_Team_2021"/>
        <p>We started in 2020 year and finished in 2021. As a result you can see this butiful and wanderful site. 
          It is so perfect as a sunrise </p>

        <div className="Images-Wrapper">
        <h4>Other photos of our perfect team:</h4>
        <img src={GR1} className='image' alt="GR1 image"/>
        <p></p>
        <img src={GR2} className='image' alt="GR2 image"/>
        <p></p>
        <img src={GR3} className='image' alt="GR3 image"/>
        <p></p>
        <img src={GR4} className='image' alt="GR4 image"/>
        <p></p>
        <img src={GR5} className='image' alt="GR5 image"/>
        <p></p>
        <h4>Our teacher:</h4>
        <img src={GR6} className='image' alt="GR6 image"/>
        </div>
       
        
      </div>
    );
  }
}

export default About;
