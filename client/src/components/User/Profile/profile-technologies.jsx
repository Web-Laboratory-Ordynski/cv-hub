import React from "react";

const ProfileTechnologies = ({ technologies }) => {
  return (
    <div className="tech-skills-container">
      <h3 className="tech-skills-title">Tech Skills</h3>

      <ul>
        {technologies.length > 0 &&
          technologies.map((technologies) => (
            <ProfileTechnologiesCard technologies={technologies} />
          ))}
      </ul>
    </div>
  );
};

const ProfileTechnologiesCard = ({ technologies }) => {
  return (
    <li className="tech-skills-item">
      {technologies.groupName && (
        <span className="tech-skills-text">{technologies.groupName}</span>
      )}

      {technologies.technologies &&
        technologies.technologies.map((technologiesGroup) => (
          <div className="">
            <h3>{technologiesGroup.name}</h3>
            <span className="tech-skills-text">{technologiesGroup.level}</span>
            {/* <div className="">
              {technologiesGroup.technologies &&
                technologiesGroup.technologies.map((technologyLevel) => (  
                ))}
            </div> */}
          </div>
        ))}
    </li>
  );
};

export default ProfileTechnologies;

// eslint-disable-next-line no-lone-blocks
{
  /* <div className="">
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
</div>; */
}
