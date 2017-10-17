import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import SignUpForm from '../login/SignUpForm'
import { Redirect } from 'react-router-dom'
import LoginPage from '../login/LoginPage'
import Medical from '../jobfield/Medical'

class HomePage extends Component {
    render() {
        return (
            <div>

                <div>
                    <h1>Get Smart </h1>

                    <div>
                        <h3>Field of Interest</h3>
                        <Link to="/jobfield/medical">Medical</Link>

                        <br />
                        <Link to="/jobfield/web">Web Development</Link>

                        <br/>
                        <Link to="/jobfield/criminal">Criminal Justice</Link>

                    </div>
                    

                    <div>
                        <LoginPage />

                    </div>
                    <button onClick="../login/LoginPage.js">Sign Up</button>

                </div>
            </div>

        );
    }
}

export default HomePage;