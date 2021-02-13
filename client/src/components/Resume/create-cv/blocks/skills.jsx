import { Button } from '@material-ui/core'
import React, { useCallback, useEffect, useState } from 'react'
import { skillsInitialState } from '../../common'
import { TextInput } from '../Inputs'

const Skills = ({ cv, setCV }) => {
  const [skills, setSkills] = useState({})
  const [currentSkillGroup, setCurrentSkillGroup] = useState(skillsInitialState)
  const [currentSkill, setCurrentSkill] = useState('')

  const updateCurrentSkillGroup = () => {
    if (!currentSkill) {
      console.log('enter skill')
      return
    }

    setCurrentSkillGroup({
      ...currentSkillGroup,
      technologies: [...currentSkillGroup.technologies, currentSkill],
    })

    setCurrentSkill('')
  }

  const saveSkillGroupToSkillsGroup = () => {
    setSkills({ ...skills, currentSkillGroup })
    setCurrentSkillGroup(skillsInitialState)
    setCurrentSkill('')
  }
  
  const saveAllSkills = useCallback(() => {
    setCV((cvState) => ({ ...cvState, technologiesGroups: skills }))
    setSkills({})
    setCurrentSkillGroup(skillsInitialState)
    setCurrentSkill('')
  }, [setCV, skills])

  useEffect(() => {

  }, [])

  return (
    <div className="cv-block">
      <div className="add-technologies-groups">
        <h3>Skills</h3>
        <TextInput
          className="group-name"
          label="Skills group"
          value={currentSkillGroup.groupName}
          onChange={(value) =>
            setCurrentSkillGroup({
              ...currentSkillGroup,
              groupName: value,
            })
          }
        />

        <div className="add-technology-to-group">
          {currentSkillGroup.technologies.map((skill) => {
            return (
              <div className="technology">
                <span>{skill}</span>
              </div>
            )
          })}

          <TextInput
            label="Skill"
            value={currentSkill}
            onChange={(value) => setCurrentSkill(value)}
          />

          <Button
            size="small"
            type="button"
            variant="contained"
            color="primary"
            onClick={updateCurrentSkillGroup}
          >
            +
          </Button>
        </div>
          <Button
            onClick={saveSkillGroupToSkillsGroup}
            className="create-group"
            type="button"
            variant="contained"
            color="primary"
          >
            Save skills group
          </Button>

          <Button
            onClick={saveAllSkills}
            className="create-group"
            type="button"
            variant="contained"
            color="primary"
          >
            Save all skills
          </Button>
      </div>
    </div>
  )
}

export default Skills
