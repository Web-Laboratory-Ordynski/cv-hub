import React from "react";

const ProfileExprerience = ({ exprerience }) => {
  return (
    <div className="">
      <h3 className="about-me-title">Work Experience</h3>
      {exprerience.length > 0 &&
        exprerience.map((exprerience) => (
          <ProfileExpreriencesCard exprerience={exprerience} />
        ))}
    </div>
  );
};

const ProfileExpreriencesCard = ({ exprerience }) => {
  return (
    <div>
      {exprerience.name && (
        <h4 className="about-me-profession">{exprerience.name}</h4>
      )}
      {exprerience.position && (
        <span className="profession-company">{exprerience.position}</span>
      )}

      <div>
        {exprerience.startedWork && (
          <span className="profession-time">{exprerience.startedWork}</span>
        )}
        {exprerience.endWork && (
          <span className="profession-time">{exprerience.endWork}</span>
        )}
      </div>
    </div>
  );
};

export default ProfileExprerience;

// {
//   /* --- comnapy 1--- */
// }
// <div>
//   <h4 className="about-me-profession">
//     Front-End Developer
//     <span className="profession-company">Freelance</span>
//   </h4>
//   <span className="profession-time">
//     September 2019 - up to now
//     <span className="profession-divider">|</span>
//     Ukraine
//   </span>

//   <ul className="profession-duties">
//     <li className="profession-duties-items">
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//       tempor incididunt ut labore et dolore magna aliqua.
//     </li>
//     <li className="profession-duties-items">
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//     </li>
//     <li className="profession-duties-items">Risus commodo viverra maecenas.</li>
//     <li className="profession-duties-items">
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
//     </li>
//   </ul>
// </div>;
// {
//   /* --- comnapy 2--- */
// }
// <div>
//   <h4 className="about-me-profession">
//     Manager
//     <span className="profession-company">Roga & Kopyta New</span>
//   </h4>
//   <span className="profession-time">
//     March 2015 - October 2018
//     <span className="profession-divider">|</span>
//     Ukraine
//   </span>

//   <ul className="profession-duties">
//     <li className="profession-duties-items">
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//       tempor incididunt ut labore et dolore magna aliqua.
//     </li>
//     <li className="profession-duties-items">
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//     </li>
//     <li className="profession-duties-items">Risus commodo viverra maecenas.</li>
//   </ul>
// </div>;

// {
//   /* --- comnapy 3--- */
// }
// <div>
//   <h4 className="about-me-profession">
//     Manager
//     <span className="profession-company">Roga & Kopyta LLC</span>
//   </h4>
//   <span className="profession-time">
//     June 2014 - February 2015
//     <span className="profession-divider">|</span>
//     Ukraine
//   </span>

//   <ul className="profession-duties">
//     <li className="profession-duties-items">
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//     </li>
//     <li className="profession-duties-items">
//       Quis ipsum suspendisse ultrices gravida.
//     </li>
//     <li className="profession-duties-items">Risus commodo viverra maecenas.</li>
//   </ul>
// </div>;
