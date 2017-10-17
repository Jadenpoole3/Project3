import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class Medical extends Component {
    render() {
        return (
            <div>
                <h1> Medical</h1>

                <h3>Nurse </h3>
                <p>Though schools may offer the same program, they will usually differ slightly. Some might feature more lab requirements while others may focus on real-world experience and testing. Below is a list of common classes.</p>

            <Link to="./jobs/MedicalJob.js"/>

            
                
            </div>
        );
    }
}

export default Medical;