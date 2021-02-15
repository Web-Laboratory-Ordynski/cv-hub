import React, { useState } from 'react'
import CreateCV from './create-cv/create-cv'
import API from '../../api/api'

import './CreateResume.scss'

const CreateResume = ({updateCV}) => {
  const [cv, setCV] = useState({
    userInfo: {},
    projects: [],
    experience: [],
    education: []
  })
  
  const saveCV = (e) => {
    e.preventDefault()
    updateCV(cv)
  }

  return (
    <CreateCV 
      cv={cv}
      setCV={setCV}
      saveCV={saveCV}
    />
  )
}


export default CreateResume