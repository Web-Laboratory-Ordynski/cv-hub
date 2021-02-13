import React from 'react'

export const TechnologyGroup = ({
  technologyGroup,
  currentTechnologie,
  setCurrentTechnologie,
  setCurrentProjectTechnologyGroup,
  currentProjectTechnologyGroup,
}) => {
  return (
    <div className="technology-group">
      <h3>technologyGroup</h3>
      {technologyGroup.technologies.map((technologie) => {
        return (
          <div className="create-technology-group">
            <TechnologyGroupItems technologie={technologie} />
          </div>
        )
      })}
    </div>
  )
}

const TechnologyGroupItems = ({ technologie }) => {
  return (
    <div className="technology">
      <span>{technologie}</span>
    </div>
  )
}

export const projectInitialState = {
  name: '',
  desc: '',
  position: '',
  siteUrl: '',
  codeUrl: '',
  technologies: [],
}

export const projectTechnologyInitialState = {
  groupName: '',
  technologies: [],
}

export const skillsInitialState = {
  groupName: '',
  technologies: [],
}

