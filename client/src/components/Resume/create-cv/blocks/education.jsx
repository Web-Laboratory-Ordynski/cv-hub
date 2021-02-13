import React, { useCallback, useEffect, useState } from 'react'
import { TextInput } from '../Inputs'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { Button, InputLabel, Select } from '@material-ui/core'

const Education = ({cv, setCV}) => {
  const [educations, setEducations] = useState([])
  const [currentEducation, setCurrentEducation] = useState({})

  const updateEducation = (value, key) => {
    setCurrentEducation({ ...currentEducation, [key]: value })
  }

  const addEducationItem = () => {
    setEducations([...educations, currentEducation])
    setCurrentEducation({})
  }

  const saveEducation = useCallback(() => {
    setCV((cvState) => ({...cvState, education: [...cvState.education, educations]}))
    setCurrentEducation({})
  }, [educations, setCV])

  useEffect(() => {
    saveEducation()
  }, [saveEducation])

  return (
    <div className="cv-block">
      <h2>Education</h2>
      <TextInput
        label="Name"
        value={currentEducation.name}
        onChange={(value) => updateEducation(value, 'name')}
      />
      <div className="choose-data">
        <span>Started work</span>
        <Calendar
          value={currentEducation.startedWork}
          onChange={(value) => updateEducation(value, 'startedWork')}
        />
      </div>

      <InputLabel htmlFor="age-native-simple">
        Are you curently studying?
      </InputLabel>
      <Select
        native
        value={currentEducation.areYouCurentlyStudying}
        onChange={(e) =>
          updateEducation(e.target.value === 'true', 'areYouCurentlyStudying')
        }
      >
        <option value={true}>Yes</option>
        <option value={false}>No</option>
      </Select>
      {!currentEducation.areYouCurentlyStudying && (
        <Calendar
          value={currentEducation.endWork}
          onChange={(value) => updateEducation(value, 'endWork')}
        />
      )}

      <Button
        onClick={addEducationItem}
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

export default Education
