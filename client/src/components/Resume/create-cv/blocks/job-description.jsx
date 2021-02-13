import React from 'react'
import { TextInput } from '../Inputs'

const JobDescription = ({ cv, setCV }) => {
  return (
    <div className="cv-block">
      <TextInput
        label="Position"
        value={cv.position}
        onChange={(value) => setCV({ ...cv, position: value })}
      />
      <TextInput
        label="Job description"
        value={cv.jobDesc}
        onChange={(value) => setCV({ ...cv, jobDesc: value })}
      />
    </div>
  )
}

export default JobDescription
