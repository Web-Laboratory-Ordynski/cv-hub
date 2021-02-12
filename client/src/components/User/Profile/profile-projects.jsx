import React from "react";

const ProfileProjects = ({ projects }) => {
  return (
    // <div>
    //   <h1>Projects:</h1>
    //   {projects.length > 0 &&
    //     projects.map((project) => <PorfileProjectsCard project={project} />)}
    // </div>
    <div className="projects-container">
      <h3 className="about-me-title">Projects</h3>

      <ul>
        {projects.length > 0 &&
          projects.map((project) => <ProfileProjectsCard project={project} />)}
        {/* <li className="projects-item">
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
        </li> */}
      </ul>
    </div>
  );
};

const ProfileProjectsCard = ({ project }) => {
  return (
    <li className="projects-item">
      {project.url && (
        <a className="project-link" href={project.url}>
          {project.url}
        </a>
      )}

      {project.technologies &&
        project.technologies.map((technologyGroup) => (
          <div className="">
            <h3>{technologyGroup.groupName}</h3>
            <div className="">
              {technologyGroup.technologies &&
                technologyGroup.technologies.map((technology) => (
                  <span className="tech-name">{technology}</span>
                ))}
            </div>
          </div>
        ))}

      {/* <span>
        <b>
          <span className="tech-name">JavaScript</span>
        </b>
      </span> */}
    </li>
  );
};

export default ProfileProjects;
