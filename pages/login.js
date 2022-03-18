import React from 'react'
import { Row, Col, Container, Form } from 'react-bootstrap'
import Input from '@mui/material/Input';
import Button from 'react-bootstrap/Button'
import InputAdornment from '@mui/material/InputAdornment';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockIcon from '@mui/icons-material/Lock';
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/actions/auth'


const Login = () => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const onLogin = (event) => {
        event.preventDefault()
        const email = event.target.elements['email'].value
        const password = event.target.elements['password'].value
        dispatch(login(email, password))
    }
    return (
        <>
            <Container>
                <Row>
                    <Col sm={12} md={7} className="bg-color2">
                    </Col>
                    <Col sm={12} md={5} className="d-grid ">
                        <Form onSubmit={onLogin}>
                            <h2 className='mx-4 my-5'>Start Accessing Banking Needs
                                With All Devices and All Platforms
                                With 30.000+ Users
                            </h2>
                            <p className='mx-4 my-4'>
                                Transfering money is eassier than ever, you can access Zwallet wherever you are.
                                Desktop, laptop, mobile phone? we cover all of that for you!
                            </p>
                            <Input name="email" type="email" placeholder='Email ..' className='py-3 my-2 mx-4' startAdornment={<InputAdornment position="start"><EmailOutlinedIcon /></InputAdornment>} />
                            <Input name="password" type='password' placeholder='Password ..' className='py-3 mx-4' startAdornment={<InputAdornment position="start"><LockIcon /></InputAdornment>} />
                            <div className='mx-4 my-4'>
                                <Link href='/forgotpassword' >
                                    <a className="d-flex justify-content-end text-decoration-none text-color3">
                                        Forgot Password?
                                    </a>
                                </Link>
                            </div>
                            <Button type="submit" className='mx-4 py-3 my-5 rounded-btn bg-color3' variant="contained" >
                                Log In
                            </Button>
                        </Form>
                        <div className="d-flex justify-content-center my-5">
                            <p>
                                Don’t have an account? Let’s &nbsp;
                            </p>
                            <Link href='/signup'>
                                <a className="d-flex justify-content-end text-decoration-none text-color3">
                                    Sign Up
                                </a>
                            </Link>
                        </div>

                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Login