import React from 'react'
import styled from 'styled-components'
import Job from './Job'

const JobList = (props) => {
    return(
        <JobListStyles>
            {props.jobs.map((job)=> {
                return (
                    <Job key={job._id} title={job.title} description={job.description} />
                )
            })}
        </JobListStyles>
    )
}

export default JobList