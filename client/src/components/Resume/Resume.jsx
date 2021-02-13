import React, { useState } from 'react'
import CreateCV from './create-cv/create-cv'

import './CreateResume.scss'

const CreateResume = () => {
  const [cv, setCV] = useState({
    userInfo: {},
    projects: [],
  })

  return (
    <CreateCV 
      cv={cv}
      setCV={setCV}
    />
  )
}


export default CreateResume