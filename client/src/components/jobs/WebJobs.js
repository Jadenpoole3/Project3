import React, { Component } from 'react';
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import styled from 'styled-components'

const WebJobsStyles = styled.div`
`



class WebJobs extends Component {
    render() {
        return (
            <div>
                <WebJobsStyles>
                <h1> Web Jobs</h1>

                </WebJobsStyles>
                

            </div>
        );
    }
}

export default WebJobs;