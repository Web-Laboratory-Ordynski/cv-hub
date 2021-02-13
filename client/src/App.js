import React, { useState, useEffect } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom'
import About from './components/About/About'
import { Home } from './components/Home/Home'
import { Login } from './components/Auth/Login/Login'
import { SignUp } from './components/Auth/SignUp/SignUp'
import { Header } from './components/layout/Header/Header'
import { Footer } from './components/layout/Footer/Footer'
import Profile from './components/User/Profile/Profile'
import { EditProfile } from './components/User/EditProfile/EditProfile'
import { CreateResume } from './components/Resume/CreateResume/CreateResume'
import { AllResumes } from './components/Resume/Resumes/AllResumes'

import API from './api/api'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [userCv, setUserCv] = useState({})
  const [isLogined, setIsLogined] = useState(false)  

  const getNewToken = async () => {
    if (getFromLS('response')) {
      const res = await API.getNewToken()
      if (res.success) {
        setUserCv(res.user)
      }
    }
  }

  useEffect(() => {
    getNewToken()
  }, [])

  const register = async (func) => {
    let user = {
      username,
      password
    }
    const res = await API.register(user)
    
    if (res.success) {
      func('/login')
      setUsername('')
      setPassword('')
      setError('')
    } else {
      func('/signup')
      setError(res)
      setUsername('')
      setPassword('')
    }
  }

  const login = async (func) => {
    let user = {
      username,
      password
    }

    if (username.trim() !== '' && password.trim() !== '') {
      const res = await API.login(user)
      
      if (res.success) {
        setIsLogined(true)
        addToLocalStorage('response', res)
        func('/home')
        setUsername('')
        setPassword('')
      } else {
        func('/login')
        setError('Invalid username or password!')
        setUsername('')
        setPassword('')
      }
    }
  }

  const addToLocalStorage = (name, value) => localStorage.setItem(name, JSON.stringify(value))

  const getFromLS = value => JSON.parse(localStorage.getItem(value))

  // console.log(userCv)

  return (
    <Router>
      <div className="App">
        <Header isLogined={isLogined} />
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
            login={login}
          />
        </Route>
        <Route path='/signup' exact>
          <SignUp
            username={username}
            password={password}
            setUsername={username => setUsername(username)}
            setPassword={password => setPassword(password)}
            error={error}
            register={register}
          />
        </Route>
        <Route path='/user/profile' exact>
          {
            userCv.cv && (
              <Profile
                cv={userCv.cv}
              />
            )
          }

        </Route>
        <Route path='/user/profile/edit' component={EditProfile} exact />
        <Route path='/resume/create' component={CreateResume} exact />
        <Route path='/resume/resumes' component={AllResumes} exact />
        <Footer />
      </div>
    </Router>
  );
}

export default (App);
