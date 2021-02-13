import React, { useState } from 'react'
import CreateCV from './create-cv/create-cv'

import './CreateResume.scss'

const CreateResume = () => {
  const [cv, setCV] = useState({
    userInfo: {},
    projects: [],
    experience: [],
    education: []
  })
  
  const saveCV = (e) => {
    e.preventDefault()
    console.log(cv)
  }

  // const updateCV = (key, value) => {

  // }

  return (
    <CreateCV 
      cv={cv}
      setCV={setCV}
      saveCV={saveCV}
    />
  )
}


export default CreateResume