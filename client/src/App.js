
//import react 
import React, { Component } from 'react'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

//import the components 
import HomePage from './components/home/HomePage.js'
import LoginPage from './components/login/LoginPage.js'
import UserPage from './components/field/UserPage.js'
import Field from './components/field/Field.js'
import Medical from './components/jobfield/Medical.js'
import Web from './components/jobfield/Web.js'
import Criminal from './components/jobfield/Criminal'
import MedicalJob from './components/jobs/MedicalJob'
import WebJobs from './components/jobs/WebJobs'
import CriminalJobs from './components/jobs/CriminalJobs'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <div>
              <Link to='/'>Home</Link>
            </div>
            <div>
              <Link to ="/login">Login</Link>
            </div>
            <div>
              <Link to ="/field">Field</Link>
            </div>
          </div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/user/:userId" component={UserPage} />
            <Route exact path="/field" component={Field} />
            <Route exact path="/jobfield/medical" component={Medical} />
            <Route exact path="/jobfield/web" component={Web} />
            <Route exact path="/jobfield/criminal" component={Criminal} />
            <Route exact path="/jobs/MedicalJob" component={MedicalJob} />
            <Route exact path="/jobs/WebJobs" component={WebJobs} />
            <Route exact path="/jobs/CriminalJobs" component={CriminalJobs} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App