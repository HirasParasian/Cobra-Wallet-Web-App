import React from 'react'
import { Row, Col, Container, Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Pin from '../components/Pin'
import Link from 'next/link'
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { registerUser } from "../redux/actions/signup"
import ModalSuccess from '../components/ModalSuccess'
import ModalError from '../components/ModalError'
import ModalLoading from '../components/ModalLoading'


const Pins = () => {
    const signup = useSelector(state => state.signup)
    const code = useSelector(state => state.code)
    console.log(code?.code)
    console.log(signup?.userData)
    const router = useRouter()
    const dispatch = useDispatch()
    useEffect(() => {
        if (code?.code.length < 6) {
            document.getElementById("confirm").disabled = true;
        } else {
            document.getElementById("confirm").disabled = false;
        }
    }, [code])

    const onSubmit = async (e) => {
        e.preventDefault()
        await dispatch(registerUser(signup.userData, code?.code))

    }

    const goToLogin = () => {
        router.push('/login')
        dispatch({ type: 'RESET_CODE' })
        dispatch({ type: 'CLEAR_MESSAGE' });
    }
    return (
        <>
            <ModalSuccess message={auth.successMsg} />
            <ModalError message={auth.errorMsg} />
            <Container>
                <Row>
                    <Col sm={12} md={7} className="bg-color1">
                    </Col>
                    <Col sm={12} md={5} className="d-grid ">
                        <Form className='my-4' onSubmit={onSubmit}>
                            <h2 className='my-5'>
                                Secure Your Account, Your Wallet,
                                and Your Data With 6 Digits PIN
                                That You Created Yourself.
                            </h2>
                            <p className='my-3'>
                                Create 6 digits pin to secure all
                                your money and your data in Zwallet
                                app. Keep it secret and don’t tell
                                anyone about your Zwallet account
                                password and the PIN.
                            </p>
                            <div className=' d-flex justify-content-center'>
                                <Pin />
                            </div>
                            <div className='d-grid gap-2'>
                                <Button type="submit" id="confirm" className='py-3 my-5 rounded-btn2 bg-color1 text-light btn-color1' size="lg">
                                    Confirm
                                </Button>
                            </div>

                        </Form>
                        <div className='d-grid gap-2'>
                            <Button onClick={goToLogin} type="button" id="login" className='py-3 my-5 rounded-btn2 bg-color1 text-light btn-color1' size="lg">
                                Log In
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Pins