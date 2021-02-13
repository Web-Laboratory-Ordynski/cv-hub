import React, { useState } from 'react'
import { TextInput } from '../Inputs'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { Button, InputLabel, Select } from '@material-ui/core'

const Experience = (props) => {
  const [expreiences, setExperiences] = useState([])
  const [currentExperience, setCurrentExperience] = useState({})

  const updateExperience = (value, key) => {
    setCurrentExperience({ ...currentExperience, [key]: value })
  }

  const addExperienceItem = () => {
    setExperiences([...expreiences, currentExperience])
    setCurrentExperience({})
  }

  return (
    <div className="cv-block">
      <h2>Experience</h2>
      <TextInput
        label="Name"
        value={currentExperience.name}
        onChange={(value) => updateExperience(value, 'name')}
      />
      <TextInput
        label="Position"
        value={currentExperience.position}
        onChange={(value) => updateExperience(value, 'position')}
      />
      <div className="choose-data">
        <span>Started work</span>
        <Calendar
          value={currentExperience.startedWork}
          onChange={(value) => updateExperience(value, 'startedWork')}
        />
      </div>

      <InputLabel htmlFor="age-native-simple">
        Are you curently working?
      </InputLabel>
      <Select
        native
        value={currentExperience.areYouCurentlyWorking}
        onChange={(e) =>
          updateExperience(e.target.value === 'true', 'areYouCurentlyWorking')
        }
      >
        <option value={true}>Yes</option>
        <option value={false}>No</option>
      </Select>
      {!currentExperience.areYouCurentlyWorking && (
        <Calendar
          value={currentExperience.endWork}
          onChange={(value) => updateExperience(value, 'endWork')}
        />
      )}

      <Button
        onClick={addExperienceItem}
        className="create-group"
        type="button"
        variant="contained"
        color="primary"
      >
        Add
      </Button>
    </div>
  )
}

export default Experience
