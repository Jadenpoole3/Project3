import React, { Component } from 'react';
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const WebStyles = styled.div`
img{
    height: 200px;
    width: 40%;
}
`

class Web extends Component {
    render() {
        return (
            <WebStyles>
        <div>
                <h1>Web Development</h1>
                <img src="https://www.eduonix.com/aDmiN_050716/public/uploads/headerimages/20170301155447.jpg" alt="web"/>


                <h3>Schools</h3>
            </div>
            </WebStyles>
            
        );
    }
}

export default Web;