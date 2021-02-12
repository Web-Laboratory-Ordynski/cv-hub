import React, { Component } from 'react';
import '../../App.css';
import GR1 from './Images/GR-1.jpg';
import GR2 from './Images/GR-2.jpg';
import GR3 from './Images/GR-3.jpg';
import GR4 from './Images/GR-4.jpg';
import GR5 from './Images/GR-5.jpg';
import GR6 from './Images/GR-6.jpg';

import AntonH from './Persons/Anton_H.jpeg';
import AntonP from './Persons/Anton_P.jpeg';
import Artur from './Persons/Artur.jpeg';
import Dmytro from './Persons/Dmytro.jpeg';
import Nastia from './Persons/Nastia.jpeg';
import Serega from './Persons/Serega.jpeg';


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
        <img src={window.location.origin + '/BRA_Team_2021.jpg'} width="850" height="500" alt="BRA_Team_2021"/>
        <p>We started in 2020 year and finished in 2021. As a result you can see this beautiful and wanderful site. 
          It is so perfect as a sunrise </p>
          <p></p>
          <p>Finally, our Team:</p>
        
        <p><img src={Artur} width="150" height="150" alt="Artur image"/></p> 
        <p><a href="https://www.linkedin.com/in/artur-bondar/">Artur Bondar</a>, back-end, front-end</p>
        <p><img src={AntonP} width="150" height="150" alt="AntonP image"/></p> 
        <p><a href="https://www.linkedin.com/in/anton-podolian/">Anton Podolian</a>, front-end</p>
        <p><img src={Dmytro} width="150" height="150" alt="Dmytro image"/></p>
        <p><a href="https://www.linkedin.com/in/%D0%B4%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9-%D1%81%D0%B5%D0%BC%D1%91%D0%BD%D0%BE%D0%B2-3686371aa/">Dmytro Semenov</a>, front-end</p>
        <p><img src={Nastia} width="150" height="150" alt="Nastia image"/></p> 
        <p><a href="https://www.linkedin.com/in/anastasiia-gvozdieva-6ba2161a2/">Anastasiia Gvozdieva</a>, front-end</p>
        <p><img src={AntonH} width="150" height="150" alt="AntonH image"/></p> 
        <p><a href="https://www.linkedin.com/in/anton-horbachov/">Anton Horbachov</a>, front-end</p>
        <p><img src={Serega} width="150" height="150" alt="Serega image"/></p> 
        <p><a href="https://www.linkedin.com/in/sergey-tikunov-939009150/">Sergey Tikunov</a>, front-end</p>
        
        <div className="Images-Wrapper">
        <h4>Other photos of our perfect team:</h4>
        <img src={GR1} width="700" height="500" alt="GR1 image"/>
        <p></p>
        <img src={GR2} width="700" height="500" alt="GR2 image"/>
        <p></p>
        <img src={GR3} width="700" height="500" alt="GR3 image"/>
        <p></p>
        <img src={GR4} width="700" height="500" alt="GR4 image"/>
        <p></p>
        <img src={GR5} width="700" height="500" alt="GR5 image"/>
        <p></p>
        <h4>Alexandr Ordinskiy, our teacher:</h4>
        <img src={GR6} width="400" height="500" alt="GR6 image"/>

        <h4>Goodbye!</h4>
        
        </div>
       
        
      </div>
    );
  }
}

export default About;
