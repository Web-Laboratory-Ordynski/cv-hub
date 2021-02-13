import React from "react";

const ProfileEducation = ({ education }) => {
  return (
    <div className="">
      <h3 className="about-me-title">Education</h3>
      {education.length > 0 &&
        education.map((education) => (
          <ProfileEducationCard education={education} />
        ))}
    </div>
  );
};

const ProfileEducationCard = ({ education }) => {
  return (
    <div>
      {education.name && <p className="profession-company">{education.name}</p>}
      {education.position && <p className="profession">{education.position}</p>}

      <div>
        {education.startedWork && (
          <span className="profession-time">{education.startedStudy} </span>
        )}
        {education.endWork && (
          <span className="profession-time"> {education.endStudy}</span>
        )}
      </div>
    </div>
  );
};

export default ProfileEducation;

// {
//   /* <p className="profession">Management</p> */
// }
// <span className="profession-time">
//   Septermber 2009 - June 2014
//   <span className="profession-divider">|</span>
//   Ukraine
// </span>;
