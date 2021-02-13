import React, { useEffect, useState } from "react";
import "./css/app.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import userImg from "./img/photo.jpg";
// import { CreateResume } from "../../Resume/CreateResume/CreateResume";
import ProfileProjects from "./profile-projects";
import ProfileTechnologies from "./profile-technologies";
import ProfileExpreriences from "./profile-exprerience";
import ProfileEducation from "./profile-education";
import ProfileUserInfoCard from "./profile-userinfo";
import Pdf from "react-to-pdf"

import API from '../../../api/api'

const ref = React.createRef();

const Profile = ({ getCV }) => {
  const [cv, setCV] = useState(null) 

  useEffect(() => {
    const cv = getCV()
    setCV(cv)
  }, [getCV])

  if (!cv) {
    return <>loading...</>
  }

  const download = async (cv) => {
    const res = await API.downloadPdf(cv)
    let file = new File(res, 'file.pdf')
    console.log(file)
    return file
  }

  return (
    <>
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <button onClick={() => download(cv)}>Download PDF</button>
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
                <FontAwesomeIcon icon={["far", "envelope"]} />
                {cv?.userInfo?.email}
              </a>
            </div>
            <div>
              <span className="contacts-link-type">
                {cv?.userInfo?.social?.name}
              </span>
              <a className="contacts-link" href="mailto:chornyiav@gmail.com">
                <FontAwesomeIcon icon={["fab", "github"]} />
                {cv?.userInfo?.social?.url}
              </a>
            </div>
          </div>

          {cv.userinfo && <ProfileUserInfoCard userinfo={cv.userinfo} />}
        </div>
        {/* --- Tech Skills container --- */}
        {cv.technologiesGroups && (
          <ProfileTechnologies technologies={cv.technologiesGroups} />
        )}

        {/* -- about me container-- */}
        <div className="about-me-container">
          {/* --- about me main intro -- */}
          <div className="info-container">
            <h2 className="profession">{cv.position}</h2>
            <h1 className="name">
              {cv?.userInfo?.firstName} {cv?.userInfo?.lastName}
            </h1>
            <p className="description">{cv.jobDesc}</p>
          </div>
          {/* -- project container-- */}
          {cv.projects && <ProfileProjects projects={cv.projects} />}

          {/* --- Work Experience --- */}
          <div>
            {cv.exprerience && (
              <ProfileExpreriences exprerience={cv.exprerience} />
            )}
            {/* ---Education container --- */}
            <div>
              {cv.exprerience && <ProfileEducation education={cv.education} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Profile;
