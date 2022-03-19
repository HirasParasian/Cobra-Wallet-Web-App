import React from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'

const WInput = ({ icon, name, placeholder, type, variant = 'underline', required = false, ...rest }) => {
    return (
        <InputGroup className="mb-3 underline">
            <InputGroup.Text className='border-0 py-3 bg-transparent' id={name}>{icon}</InputGroup.Text>
            <FormControl
                className='underline border-0 bg-transparent'
                placeholder={placeholder}
                aria-label={name}
                type={type}
                required={required}
                name={name}
            />
        </InputGroup>
    )
}

export default WInput