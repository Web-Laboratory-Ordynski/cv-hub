import React, { useState } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom'
import { About } from './components/About/About'
import { Home } from './components/Home/Home'
import { Login } from './components/Auth/Login/Login'
import { SignUp } from './components/Auth/SignUp/SignUp'
import { Header } from './components/layout/Header/Header'
import { Footer } from './components/layout/Footer/Footer'
import { Profile } from './components/User/Profile/Profile'
import { EditProfile } from './components/User/EditProfile/EditProfile'
import { CreateResume } from './components/Resume/CreateResume/CreateResume'
import { AllResumes } from './components/Resume/Resumes/AllResumes'

import API from './api/api'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const register = async () => {
    const user = {
      username,
      password
    }

    const res = await API.register(user)
    console.log(res)
    if (res.success) {
      addToLocalStorage('response', res)
      setError('')
    } else {
      setError(res.msg)
    }

    setPassword('')
    setUsername('')
  }

  const login = async () => {
    const user = {
      username,
      password
    }

    const res = await API.login(user)
    console.log(res)
    if (res.success) {
      addToLocalStorage('response', res)
      setError('')
    } else {
      setError(res.msg)
    }
    
    setPassword('')
    setUsername('')
  }

  const addToLocalStorage = (name, value) => localStorage.setItem(name, JSON.stringify(value))

  const getFormLocalStorage = name => JSON.parse(localStorage.getItem(name))

  return (
    <Router>
      <div className="App">
        <Header />
        <Route path='/about' exact>
          <About />
        </Route>
        <Route path='/home' component={Home} exact />
        <Route path='/login' exact>
          <Login
            username={username}
            password={password}
            setUsername={username => setUsername(username)}
            setPassword={password => setPassword(password)}
            error={error}
            login={() => login()}
          />
        </Route>
        <Route path='/signup' exact>
          <SignUp
            username={username}
            password={password}
            setUsername={username => setUsername(username)}
            setPassword={password => setPassword(password)}
            error={error}
            register={() => register()}
          />
        </Route>
        <Route path='/user/profile' component={Profile} exact />
        <Route path='/user/profile/edit' component={EditProfile} exact />
        <Route path='/resume/create' component={CreateResume} exact />
        <Route path='/resume/resumes' component={AllResumes} exact />
        <Footer />
      </div>
    </Router>
  );
}

export default (App);
