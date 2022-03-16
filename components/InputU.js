import React from 'react'
import style from './InputU.module.css'
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';

export const InputU = ({ label, variant, block, icon, placeholder, padding, version, ...rest }) => {
    return (
        <>
            <label className=''><b>{label}</b></label>
            <div className={block ? `d-grid ${padding ? padding : 'px-1 my-2'}` : `d-inline-block ${padding ? padding : ''}`} >
                <Input type="text" icon={icon}
                    startAdornment={
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    }
                    className={`py-2 wrapper ${version}`} iconPosition='left' placeholder={`${placeholder ? placeholder : ''}`} {...rest} />
            </div>
            <span className="underline"></span>

        </>
    )
}

export default InputU
