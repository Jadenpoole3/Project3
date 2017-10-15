import React from 'react'
import styled from 'styled-components'

const FieldStyles = styled.div`
`


const Field = (props) => {
    const deleteField = () => {
        props.deleteField(props._id)
    }

    const handleChange = (event) => {
        props.handleChange(event, props._id)
    }

    const updateField = () => {
        props.updateField(props._id)
    }
    
}
 return (
     <FieldStyles>

     </FieldStyles>
 )

export default Field