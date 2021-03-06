import React, { useEffect, useState } from 'react'
import './css/app.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import userImg from './img/photo.jpg'
// import { CreateResume } from "../../Resume/CreateResume/CreateResume";
import ProfileProjects from './profile-projects'
import ProfileTechnologies from './profile-technologies'
import ProfileExpreriences from './profile-exprerience'
import ProfileEducation from './profile-education'
import ProfileUserInfoCard from './profile-userinfo'
import Pdf from 'react-to-pdf'

const ref = React.createRef();

const Profile = ({ cv }) => {

  if (!cv) {
    return <>loading...</>
  }

  return (
    <>
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      {/* <button onClick={() => download(cv)}>Download PDF</button> */}
      <div ref={ref} className="wrapper">
        <div className="sidebar">
          <img className="my-foto" src={userImg} alt="my foto" />
          {/* ---contacts container --- */}
          <div className="contacts-container">
            <h3 className="contacts-title">Contacts</h3>
            <div>
              <span className="contacts-link-type">P:</span>
              <a className="contacts-link" href="tel: +38 095 113 85 98">
                {cv?.userInfo?.phone}
              </a>
            </div>
            <div>
              <span className="contacts-link-type">E:</span>
              <a className="contacts-link" href="mailto:chornyiav@gmail.com">
                <FontAwesomeIcon icon={['far', 'envelope']} />
                {cv?.userInfo?.email}
              </a>
            </div>
            <div>
              {cv?.userInfo?.social.map((social) => {
                return (
                  <>
                    <span className="contacts-link-type">
                      {social.name}
                    </span>
                    <a
                      className="contacts-link"
                      href="mailto:chornyiav@gmail.com"
                    >
                      <FontAwesomeIcon icon={['fab', 'github']} />
                      {social.url}
                    </a>
                  </>
                )
              })}
            </div>
          </div>

          {cv.userinfo && <ProfileUserInfoCard userinfo={cv.userinfo} />}
        </div>
        {/* -- about me container-- */}
        <div className="about-me-container">
          {/* --- about me main intro -- */}
          <div className="info-container">
            <h1 className="name">
              {cv?.userInfo?.name} {cv?.userInfo?.surname}
            </h1>
            <h2 className="profession">{cv.position}</h2>
            <p className="description">{cv.jobDesc}</p>
          </div>
            {/* --- Tech Skills container --- */}
        {cv.technologiesGroups.length > 0 && (
          <ProfileTechnologies technologies={cv.technologiesGroups} />
        )}
          {/* -- project container-- */}
          {cv.projects.length > 0 && <ProfileProjects projects={cv.projects} />}

          {/* --- Work Experience --- */}
          <div>
            {cv.experience.length > 0 && (
              <ProfileExpreriences exprerience={cv.experience} />
            )}
            {/* ---Education container --- */}
            <div>
              {cv.education.length > 0 && <ProfileEducation education={cv.education} />}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
