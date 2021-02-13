import React from 'react'
import { TechnologyGroup } from '../common'

const ExistedCv = ({cv}) => {
  return (
    <div className="existed-projects-wrapper">
      exisssted
    <h3>Added projects:</h3>
    <div className="existed-projects">
      {cv.projects.map((project) => {
        return (
          <ProjectItem
            project={project}
            // removeProject={removeProject}
            // editProject={editProject}
            // currentTechnologie={currentTechnologie}
            // setCurrentTechnologie={setCurrentTechnologie}
            // setCurrentProjectTechnologyGroup={
            //   setCurrentProjectTechnologyGroup
            // }
            // currentProjectTechnologyGroup={
            //   currentProjectTechnologyGroup
            // }
          />
        )
      })}
    </div>
  </div>
  )
}


const ProjectItem = ({
  project,
  removeProject,
  editProject,
  currentTechnologie,
  setCurrentTechnologie,
  setCurrentProjectTechnologyGroup,
  currentProjectTechnologyGroup,
}) => {
  return (
    <div className="project-item">
      <div className="project-info">
        <h3>{project.name}</h3>
        <span>{project.desc}</span>
      </div>
      <div className="technologies-groups">
        <h3>Technologies</h3>
        {project.technologiesGroup.map((technologyGroup) => {
          return (
            <TechnologyGroup
              currentTechnologie={currentTechnologie}
              setCurrentTechnologie={setCurrentTechnologie}
              setCurrentProjectTechnologyGroup={
                setCurrentProjectTechnologyGroup
              }
              currentProjectTechnologyGroup={currentProjectTechnologyGroup}
              technologyGroup={technologyGroup}
            />
          )
        })}
      </div>
      <div className="buttons">
        <button onClick={removeProject}>delete</button>
        <button onClick={editProject}>edit</button>
      </div>
    </div>
  )
}

export default ExistedCv