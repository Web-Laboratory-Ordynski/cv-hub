import React, { useEffect, useState } from 'react'
import './App.css';
import {
  HashRouter as Router,
  Route,
  useHistory,
} from 'react-router-dom'
import About from './components/About/About'
import { Home } from './components/Home/Home'
import { Login } from './components/Auth/Login/Login'
import { SignUp } from './components/Auth/SignUp/SignUp'
import { Header } from './components/layout/Header/Header'
import { Footer } from './components/layout/Footer/Footer'
import Profile from './components/User/Profile/Profile'
import { EditProfile } from './components/User/EditProfile/EditProfile'
import { AllResumes } from './components/Resume/Resumes/AllResumes'

import API from './api/api'
import CreateResume from './components/Resume/Resume';

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [user, setUser] = useState(null)
	const history = useHistory()

  const register = async (func) => {
    const user = {
      username,
      password
    }

    const res = await API.register(user)
    console.log(res)

    if (res.success) {
      addToLocalStorage('response', res)
      func('/#/login')
      setUsername('')
      setPassword('')
      setError('')
    } else {
      setError(res.msg)
      func('/#/signup')
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
      console.log(res)

      if (res.success) {
        setUser(res.user)
        addToLocalStorage('response', res)
        setError('')
        func('/#/home')
      } else {
        func('/#/login')
        setError(res.msg)
        setUsername('')
        setPassword('')
      }
    }
  }

  const updateCV = async (cv) => {
    const response = getFormLocalStorage('response')

    if (!response.accessToken) {
      const response = {
        user: {
          cv
        }
      }
      return addToLocalStorage('response', response)
    } 

    const res = await API.editCv(cv)
    if (res.success) {
      response.user = res.user
      addToLocalStorage('response', response)
      setUser(res.user)
    }
  }

  const addToLocalStorage = (name, value) => localStorage.setItem(name, JSON.stringify(value))

  const getFormLocalStorage = name => {
    const item = JSON.parse(localStorage.getItem(name))
    return item
  }

  useEffect(() => {
    const res = getFormLocalStorage('response')
    if (
      !res?.refreshToken
      ) {
        const isLoginPage = window.location.pathname === '/login'
        if  ( !isLoginPage ||
        window.location.pathname === '/signup') {
          window.location.href = '/login'

        }
    } else {
      (async () => {
        const res = await API.getNewToken()
        setUser(res.user)
      })()
    }
  }, [])

  return (
    <Router>
      <div className="App">
        <Header isLogined={user ? true : false} />
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
        <Route path='/user/profile' component={Profile} exact>
          <Profile cv={user?.cv} />
        </Route>
        <Route path='/user/profile/edit' component={EditProfile} exact />
        <Route path='/resume/create' exact>
          <CreateResume updateCV={(cv) => updateCV(cv)} />
        </Route>
        <Route path='/resume/resumes' component={AllResumes} exact />
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default (App);
