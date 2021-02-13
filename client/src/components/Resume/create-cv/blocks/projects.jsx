import { Button } from '@material-ui/core'
import React, { useCallback, useState } from 'react'
import { TextInput } from '../Inputs'
import { projectInitialState, projectTechnologyInitialState } from '../../common'

const Projects = ({
  setCV, cv
}) => {
  const [currentProject, setCurrentProject] = useState(projectInitialState)
  const [currentTechnologie, setCurrentTechnologie] = useState('')
  const [
    currentProjectTechnologyGroup,
    setCurrentProjectTechnologyGroup,
  ] = useState(projectTechnologyInitialState)

  const updateCurrentProject = (value, key) => {
    setCurrentProject({ ...currentProject, [key]: value })
  }

  const addTechnologyToTechnologiesGroup = (technology) => {
    if (!currentTechnologie) {
      console.log('enter technologie')
      return
    }
    setCurrentProjectTechnologyGroup({
      ...currentProjectTechnologyGroup,
      technologies: [
        ...currentProjectTechnologyGroup.technologies,
        currentTechnologie,
      ],
    })

    setCurrentTechnologie('')
  }

  const saveTechnologyGroup = () => {
    setCurrentProject({
      ...currentProject,
      technologies: [...currentProject.technologies, currentProjectTechnologyGroup],

    })
    setCurrentProjectTechnologyGroup(projectTechnologyInitialState)
    setCurrentTechnologie('')
  }

  const saveCurrentProject = useCallback((e) => {
    setCV({ ...cv, projects: [...cv.projects, currentProject] })
    setCurrentProjectTechnologyGroup({...projectTechnologyInitialState})
    setCurrentTechnologie('')
  }, [currentProject, cv, setCV])


  // useEffect(() => {
  //   setCV({ ...cv, projects: [...cv.projects, currentProject] })
  //   setCurrentProjectTechnologyGroup({...projectTechnologyInitialState})
  //   setCurrentTechnologie('')
  // }, [currentProject, cv, saveCurrentProject, setCV])
  
  return (
    <div className="cv-block">
    <h2>Projects</h2>
    <TextInput
      label="Name"
      value={currentProject.name}
      onChange={(value) => updateCurrentProject(value, 'name')}
    />
    <TextInput
      label="Description"
      value={currentProject.desc}
      onChange={(value) => updateCurrentProject(value, 'desc')}
    />
    <TextInput
      label="Position"
      value={currentProject.position}
      onChange={(value) => updateCurrentProject(value, 'position')}
    />
    <TextInput
      label="Site url"
      value={currentProject.siteUrl}
      onChange={(value) => updateCurrentProject(value, 'siteUrl')}
    />
    <TextInput
      label="Repositorie link"
      value={currentProject.codeUrl}
      onChange={(value) => updateCurrentProject(value, 'codeUrl')}
    />

    <div className="add-technologies-groups">
      <h3>Add technologies:</h3>
      <TextInput
        className="group-name"
        label="Technology group"
        value={currentProjectTechnologyGroup.groupName}
        onChange={(value) =>
          setCurrentProjectTechnologyGroup({
            ...currentProjectTechnologyGroup,
            groupName: value,
          })
        }
      />

      <div className="add-technology-to-group">
        {currentProjectTechnologyGroup.technologies.map(
          (technology) => {
            return (
              <div className="technology">
                <span>{technology}</span>
              </div>
            )
          }
        )}

        <TextInput
          label="Technology"
          value={currentTechnologie}
          onChange={(value) => setCurrentTechnologie(value)}
        />

        <Button
          size="small"
          type="button"
          variant="contained"
          color="primary"
          onClick={addTechnologyToTechnologiesGroup}
        >
          +
        </Button>
      </div>

      <div className="buttons">
        <Button
          className="create-group"
          type="button"
          variant="contained"
          color="primary"
        >
          Add group
        </Button>

        <Button
          onClick={saveTechnologyGroup}
          className="create-group"
          type="button"
          variant="contained"
          color="primary"
        >
          Save group
        </Button>
      </div>
    </div>
  </div>
  )
}

export default Projects