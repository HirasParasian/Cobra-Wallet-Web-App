import React from 'react'
import OtpInput from 'react-otp-input'
import { useDispatch, useSelector } from 'react-redux';
// import Style from "../components/Pin.module.css   "

export const ConfirmPin = () => {
    const code = useSelector(state => state.code);
    const dispatch = useDispatch()

    const handleChange = (newCode) => dispatch({ type: 'NEW_CODE', payload: { newCode } });
    return (
        <OtpInput
            value={code?.newCode}
            onChange={handleChange}
            numInputs={6}
            isInputNum={true}
            separator={<span> &nbsp;&nbsp;&nbsp;&nbsp; </span>}
            className={"p-1"}
            inputStyle="border-3 border-color1 p-3 text-dark"
        />
    )
}
export default ConfirmPin