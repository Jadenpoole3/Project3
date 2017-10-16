import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class HomePage extends Component {
    render() {
        return (

            <Router>

            <div>
               <h1>Welcome </h1> 

    <div>
    <h3>Field of Interest</h3>
               <a href="./components/jobfield/medical">Medical</a> 
               <br/>
               <a href="./components/jobfield/web">Web Development</a> 
               

    </div>
               <h3> User Fields</h3>

               <button onClick="/login">Sign Up</button>
            




            </div>
            </Router>
           
        );
    }
}

export default HomePage;