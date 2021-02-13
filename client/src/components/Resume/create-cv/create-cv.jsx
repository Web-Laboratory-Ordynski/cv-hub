import React from 'react'
import { Button } from '@material-ui/core'
import Projects from './blocks/projects'
import UserInfo from './blocks/user-info'
import JobDescription from './blocks/job-description'
import Skills from './blocks/skills'
import Experience from './blocks/experience'
import Education from './blocks/education'

const CreateCV = ({ cv, setCV, saveCV }) => {

  
  return (
    <div className="create-resume-wrapper">
      <div className="create-resume">
        <form onSubmit={saveCV} >
          <JobDescription cv={cv} setCV={setCV}/>
          <UserInfo cv={cv} setCV={setCV} />
          <Projects cv={cv} setCV={setCV} />
          <Skills cv={cv} setCV={setCV} />
          <Experience cv={cv} setCV={setCV} />
          <Education cv={cv} setCV={setCV}  />
          <Button
            className="create-group"
            type="submit"
            variant="contained"
            color="primary"
          >
            Save cv
          </Button>
        </form>
      </div>
    </div>
  )
}

export default CreateCV
