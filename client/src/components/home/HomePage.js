import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import SignUpForm from '../login/SignUpForm'
import { Redirect } from 'react-router-dom'
import LoginPage from '../login/LoginPage'
import Medical from '../jobfield/Medical'
import styled from 'styled-components'

const HomePageStyles = styled.div`
img{
    height: 200px;
    width: 40%;
}
text-align: center;
`

class HomePage extends Component {
    render() {
        return (
            <div>
                <HomePageStyles>
                <div>
                    <h1>Get Smart </h1>
                    <img src="https://www.gla.ac.uk/media/media_247714_en-353x353.jpg" alt="when"/>

                    <div>
                        <LoginPage />

                    </div>
                    <button onClick="./login/LoginPage.js">Sign Up</button>

                </div>
                </HomePageStyles>
            </div>

            
                
        );
    }
}

export default HomePage;