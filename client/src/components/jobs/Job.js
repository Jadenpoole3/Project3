import React from 'react'
import styled from 'styled-components'

const JobStyles = styled.div`
`

const Job = (props) => {
    const deleteJob = () => {
        props.deleteJob(props._id)
    }

    const handleChange = (event) => {
        props.handleChange(event, props._id)
    }

    const updateJob = () => {
        props.updateJob(props._id)
    }

    return (
        <JobStyles>
            
        </JobStyles>
    )
}