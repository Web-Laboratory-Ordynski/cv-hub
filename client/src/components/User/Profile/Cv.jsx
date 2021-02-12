import React from "react"
import "./css/app.css"
// import Image from "./img/photo"
import Pdf from "react-to-pdf"

// const ref = React.createRef();

export const Cv = ({ ref }) => {

  // const

  return (
    <>
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div className='cv'>
        <div className="wrapper" ref={ref}>
          <div className="sidebar">
            <img className="my-foto" src="./img/photo.jpg" alt="my foto" />
            {/* ---contacts container --- */}
            <div className="contacts-container">
              <h3 className="contacts-title">Contacts</h3>
              <div>
                <span className="contacts-link-type">C:</span>
                <a className="contacts-link" href="tel: +38 095 113 85 98">
                  +38 093 952 85 98
            </a>
              </div>
              <div>
                <span className="contacts-link-type">E:</span>
                <a className="contacts-link" href="mailto:chornyiav@gmail.com">
                  chornyiav@gmail.com
            </a>
              </div>
            </div>
            {/* --- Tech Skills container --- */}
            <div className="tech-skills-container">
              <h3 className="tech-skills-title">Tech Skills</h3>
              <ul>
                <li className="tech-skills-item">
                  <span className="tech-skills-text">HTML5</span>
                </li>
                <li className="tech-skills-item">
                  <span className="tech-skills-text">CSS3</span>
                </li>
                <li className="tech-skills-item">
                  <span className="tech-skills-text">GIT</span>
                </li>
                <li className="tech-skills-item">
                  <span className="tech-skills-text">WebPack</span>
                </li>
                <li className="tech-skills-item">
                  <span className="tech-skills-text">JavaScraipt</span>
                </li>
                <li className="tech-skills-item">
                  <span className="tech-skills-text">React.js</span>
                </li>
                <li className="tech-skills-item">
                  <span className="tech-skills-text">Node.js</span>
                </li>
              </ul>
            </div>
            {/* --- Soft Skills container--- */}
            <div className="soft-skills-container">
              <h3 className="soft-skills-title">Soft Skills</h3>
              <ul>
                <li className="soft-skills-item">
                  <span className="soft-skills-text">Scrum</span>
                </li>
                <li className="soft-skills-item">
                  <span className="soft-skills-text">Agile</span>
                </li>
                <li className="soft-skills-item">
                  <span className="soft-skills-text">GTD</span>
                </li>
                <li className="soft-skills-item">
                  <span className="soft-skills-text">Teamwork</span>
                </li>
              </ul>
            </div>
          </div>

          {/* -- about me container-- */}
          <div className="about-me-container">
            {/* --- about me main intro -- */}
            <div className="info-container">
              <h2 className="profession">Front-End Developer</h2>
              <h1 className="name">Dmitry Semenov</h1>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                accumsan lacus vel facilisis.
          </p>
            </div>
            {/* -- project container-- */}
            <div className="projects-container">
              <h3 className="about-me-title">Projects</h3>
              <ol>
                <li className="projects-item">
                  <a className="project-link" href="https://lovecamp.allinsol.com/">
                    https://lovecamp.allinsol.com/
              </a>
                  <span className="dots">.......................</span>
                  <span>
                    <b>
                      <span className="tech-name">HTML5, CSS3</span>
                    </b>
                  </span>
                </li>
                <li className="projects-item">
                  <a className="project-link" href="https://cryptohub.goit.ua/">
                    https://cryptohub.goit.ua/
              </a>
                  <span className="dots">................................</span>
                  <span>
                    <b>
                      <span className="tech-name">JavaScript</span>
                    </b>
                  </span>
                </li>
                <li className="projects-item">
                  <a className="project-link" href="https://kidslike.goit.co.ua/">
                    https://kidslike.goit.co.ua/
              </a>
                  <span className="dots">................................</span>
                  <span>
                    <b></b> <span className="tech-name">React.js, Node.js</span>
                    <b></b>
                  </span>
                </li>
              </ol>
            </div>

            {/* --- Work Experience --- */}
            <div>
              <h3 className="about-me-title">Work Experience</h3>

              {/* --- comnapy 1--- */}
              <div>
                <h4 className="about-me-profession">
                  Front-End Developer
              <span className="profession-company">Freelance</span>
                </h4>
                <span className="profession-time">
                  September 2019 - up to now
              <span className="profession-divider">|</span>
              Ukraine
            </span>

                <ul className="profession-duties">
                  <li className="profession-duties-items">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
                  <li className="profession-duties-items">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
                  <li className="profession-duties-items">
                    Risus commodo viverra maecenas.
              </li>
                  <li className="profession-duties-items">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod.
              </li>
                </ul>
              </div>
              {/* --- comnapy 2--- */}
              <div>
                <h4 className="about-me-profession">
                  Manager
              <span className="profession-company">Roga & Kopyta New</span>
                </h4>
                <span className="profession-time">
                  March 2015 - October 2018
              <span className="profession-divider">|</span>
              Ukraine
            </span>

                <ul className="profession-duties">
                  <li className="profession-duties-items">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
                  <li className="profession-duties-items">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
                  <li className="profession-duties-items">
                    Risus commodo viverra maecenas.
              </li>
                </ul>
              </div>

              {/* --- comnapy 3--- */}
              <div>
                <h4 className="about-me-profession">
                  Manager
              <span className="profession-company">Roga & Kopyta LLC</span>
                </h4>
                <span className="profession-time">
                  June 2014 - February 2015
              <span className="profession-divider">|</span>
              Ukraine
            </span>

                <ul className="profession-duties">
                  <li className="profession-duties-items">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
                  <li className="profession-duties-items">
                    Quis ipsum suspendisse ultrices gravida.
              </li>
                  <li className="profession-duties-items">
                    Risus commodo viverra maecenas.
              </li>
                </ul>
              </div>

              {/* ---Education container --- */}
              <div>
                <h3 className="about-me-title">Education</h3>
                <p className="profession-company">
                  Kharkiv National University of Radioelectronics
            </p>
                <p className="profession">Management</p>
                <span className="profession-time">
                  Septermber 2009 - June 2014
              <span className="profession-divider">|</span>
              Ukraine
            </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
