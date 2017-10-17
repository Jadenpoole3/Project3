
//import react 
import React, { Component } from 'react'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

//import the components 
import HomePage from './components/home/HomePage.js'
import LoginPage from './components/login/LoginPage.js'
import FieldPage from './components/field/FieldPage.js'
import Field from './components/field/Field.js'
import Medical from './components/jobfield/Medical.js'
import Web from './components/jobfield/Web.js'
import MedicalJob from './components/jobs/MedicalJob'

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
            <Route exact path="/field/:userId" component={FieldPage} />
            <Route exact path="/field" component={Field} />
            <Route exact path="/jobfield/medical" component={Medical} />
            <Route exact path="/jobfield/web" component={Web} />
            <Route exact path="/jobs/medical/MedicalJob" component={MedicalJob} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App