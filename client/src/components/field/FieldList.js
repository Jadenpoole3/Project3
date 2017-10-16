import React from 'react'
import styled from 'styled-components'
import Field from './Field'

const FieldList = (props) => {
    return (
        <FieldListStyles>
            {props.fields.map((field) => {

                
                return (
                    
                  
                    <Field key={field._id} title={field.title} description={field.description} />
                )

          
            })}

        </FieldListStyles>
    )
}

export default FieldList