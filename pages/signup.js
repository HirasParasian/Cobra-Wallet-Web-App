import React, { useState } from 'react'
import { Row, Col, Container, Form } from 'react-bootstrap'
import Input from '../components/Input'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'
import { FiMail } from 'react-icons/fi'
import { FaLock } from 'react-icons/fa'
import ModalSuccess from '../components/ModalSuccess'
import ModalError from '../components/ModalError'
import ModalLoading from '../components/ModalLoading'
import { DataRegister } from '../redux/actions/signup'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from "next/router"




const Signup = () => {
    const router = useRouter()
    const signup = useSelector(state => state.signup)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        // dispatch({ type: "RESET_REGISTER_STATE" })
        const data = {
            firstName: e.target.elements['firstName'].value,
            lastName: e.target.elements['lastName'].value,
            email: e.target.elements['email'].value,
            password: e.target.elements['password'].value,
        }
        dispatch(DataRegister(data))
        dispatch({ type: 'CLEAR_MESSAGE' });
        router.push('/pin')
    }


    return (
        <>
            {/* <ModalSuccess message={auth.successMsg} />
            <ModalError message={auth.errorMsg} /> */}
            <Container>
                <Row>
                    <Col sm={12} md={7} className="bg-color2">
                    </Col>
                    <Col sm={12} md={5} className="d-grid ">
                        <h2 className='mx-4 my-3'>Start Accessing Banking Needs
                            With All Devices and All Platforms
                            With 30.000+ Users
                        </h2>
                        <p className='mx-4 my-3'>
                            Transfering money is eassier than ever, you can access Zwallet wherever you are.
                            Desktop, laptop, mobile phone? we cover all of that for you!
                        </p>
                        <Form className='mx-4' onSubmit={handleSubmit}>
                            <div className="d-grid gap-2">
                                <Input type="text" name="firstName" placeholder='First Name ..' className='py-3 my-2 mx-5' icon={<FiMail />} />
                                <Input type="text" name='lastName' placeholder='Last Name ..' className='py-3 mx-4' icon={<FaLock />} />
                                <Input name="email" type="email" placeholder='Email ..' className='py-3 my-2 mx-5' icon={<FiMail />} />
                                <Input name="password" type='password' placeholder='Password ..' className='py-3 mx-4' icon={<FaLock />} />
                            </div>
                            <div className='mx-4 my-4'>
                                <Link href='/forgotpassword' >
                                    <a className="d-flex justify-content-end text-decoration-none text-color1">
                                        Forgot Password?
                                    </a>
                                </Link>
                            </div>
                            <div className="d-grid gap-2">
                                <Button type="submit" variant="color3" className='btn py-3 my-5 rounded-btn2 bg-color1 text-light btn-color1' size="lg">
                                    Sign Up
                                </Button>
                            </div>
                        </Form>
                        <div className="d-flex justify-content-center my-5">
                            <p>
                                have an account? Let’s &nbsp;
                            </p>
                            <Link href='/login'>
                                <a className="d-flex justify-content-end text-decoration-none text-color3">
                                    Log In
                                </a>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>


        </>
    )
}
export default Signup