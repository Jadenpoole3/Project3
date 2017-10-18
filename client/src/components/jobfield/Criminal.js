import React, { Component } from 'react';
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const CriminalStyles = styled.div`

`


class Criminal extends Component {
    render() {
        return (
            <div>
                <CriminalStyles>

                <h1> Criminal Justice</h1>
                <img src="https://www.criminaljusticedegreeschools.com/wp-content/themes/p8-theme/img/criminal-justice-schools-montage.jpg" alt="criminal"/>


            <br/>
                <h1>Criminal Justice</h1>
                <p> the system of law enforcement, involving police, lawyers, courts, and corrections, used for all stages of criminal proceedings and punishment</p>

                <h3>Detectives and Criminal Investigators</h3>
                <p>Criminal investigators are specially-trained police officers who are called to investigate significant and major crimes. 
                    Generally, they handle complicated cases that patrol officers don't have the time, resources or training to follow through with a thorough investigation.
                    Police detectives and investigators can earn up to $97,000, depending on where they work their length of service.</p>

                <h3> Police Officer</h3>
                <p>Police officers answer calls for service, investigate minor crimes, provide protection and law enforcement services and investigate traffic crashes. 
                    They also patrol their communities and generally work to keep neighborhoods safe and prevent crime.  </p>
                
                    <Link to="/jobs/CriminalJobs"> Jobs </Link>
                
                </CriminalStyles>
               
            </div>
        );
    }
}

export default Criminal;