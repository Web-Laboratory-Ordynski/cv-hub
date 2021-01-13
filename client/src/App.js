import './App.css';
import { 
  BrowserRouter as Router, 
  Route 
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
import { UserResume } from './components/Resume/UserResume/UserResume'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path='/about' component={About} exact />
        <Route path='/home' component={Home} exact />
        <Route path='/login' component={Login} exact />
        <Route path='/signup' component={SignUp} exact />
        <Route path='/user/profile' component={Profile} exact />
        <Route path='/user/profile/edit' component={EditProfile} exact />
        <Route path='/resume/create' component={CreateResume} exact />
        <Route path='/resume/resumes' component={AllResumes} exact />
        <Route path='/resume/userResume' component={UserResume} exact />
        <Footer />
      </div>
    </Router>
  );
}

export default (App);
