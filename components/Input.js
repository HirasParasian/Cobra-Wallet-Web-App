import React from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'

const Input = ({ icon, name, placeholder, type, variant = 'underline', required = false, ...rest }) => {
    return (
        <InputGroup className="mb-3 underline">
            <InputGroup.Text className='border-0 py-3 bg-color5' id={name}>{icon}</InputGroup.Text>
            <FormControl
                className='underline border-0 bg-color4'
                placeholder={placeholder}
                aria-label={name}
                type={type}
                required={required}
                name={name}
            />
        </InputGroup>
    )
}

export default Input