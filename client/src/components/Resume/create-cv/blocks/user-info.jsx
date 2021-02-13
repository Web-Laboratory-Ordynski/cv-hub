import React from 'react'
import { PhoneInput, TextInput } from '../Inputs'

const UserInfo = ({setCV, cv }) => {

  const changeUserInfo = (value, key) => {
    setCV({ ...cv, userInfo: { ...cv.userInfo, [key]: value } })
  }
  
  return (
    <div className="cv-block">
      <h2>User info</h2>
      <TextInput
        label="Name"
        value={cv.userInfo.name}
        onChange={(value) => changeUserInfo(value, 'name')}
      />
      <TextInput
        label="Surname"
        value={cv.userInfo.surname}
        onChange={(value) => changeUserInfo(value, 'surname')}
      />
      <TextInput
        label="Adress"
        value={cv.userInfo.adress}
        onChange={(value) => changeUserInfo(value, 'adress')}
      />
      <TextInput
        label="E-mail"
        value={cv.userInfo.email}
        onChange={(value) => changeUserInfo(value, 'email')}
      />
      <PhoneInput
        label="Phone"
        value={cv.userInfo.phone}
        onChange={(value) => changeUserInfo(value, 'phone')}
      />
    </div>
  )
}

export default UserInfo
