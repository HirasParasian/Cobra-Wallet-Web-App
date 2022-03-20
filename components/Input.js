import React from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'

const Input = ({ icon, name, placeholder, type, variant = 'underline', required = false, ...rest }) => {
    return (
        <InputGroup className="mb-3 underline">
            <InputGroup.Text className='border-top-0 border-start-0 border-end-0 py-3 bg-transparent' id={name}>{icon}</InputGroup.Text>
            <FormControl
                className='underline border-top-0 border-start-0 border-end-0 bg-transparent'
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