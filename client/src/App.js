
//
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import HomePage from './components/home/HomePage'
import LoginPage from './components/login/LoginPage'
import FieldPage from './components/field/FieldPage'

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
            <Route exact path="/field" component={FieldPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App