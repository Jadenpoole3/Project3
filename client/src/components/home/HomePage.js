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
                        <LoginPage />

                    </div>
                    <button onClick="../login/LoginPage.js">Sign Up</button>

                </div>
            </div>

        );
    }
}

export default HomePage;