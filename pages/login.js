import React from 'react'
import { Row, Col, Container, Form } from 'react-bootstrap'
import Input from '../components/Input'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/actions/auth'
import { FiMail } from 'react-icons/fi'
import { FaLock } from 'react-icons/fa'
import ModalSuccess from '../components/ModalSuccess'
import ModalError from '../components/ModalError'
import { useRouter } from "next/router"


const Login = () => {
    const auth = useSelector(state => state.auth)
    console.log(auth)
    const dispatch = useDispatch()
    const router = useRouter()

    const onLogin = (event) => {
        event.preventDefault()
        const email = event.target.elements['email'].value
        const password = event.target.elements['password'].value
        dispatch(login(email, password))
        if (auth.isError == false) {
            router.push('/home')
        }
        dispatch({ type: 'CLEAR_MESSAGE' });
    }
    return (
        <>
            <ModalSuccess message={auth.successMsg} />
            <ModalError message={auth.errorMsg} />
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
                            <div className="d-grid gap-2">
                                <Input name="email" type="email" placeholder='Email ..' className='py-3 my-2 mx-5' icon={<FiMail />} />
                                <Input name="password" type='password' placeholder='Password ..' className='py-3 mx-4' icon={<FaLock />} />
                            </div>
                            <div className='mx-4 my-4'>
                                <Link href='/forgotpassword' >
                                    <a className="d-flex justify-content-end text-decoration-none text-color3">
                                        Forgot Password?
                                    </a>
                                </Link>
                            </div>
                            <div className="d-grid gap-2">
                                <Button type="submit" variant="color3" className='btn py-3 my-5 rounded-btn2 bg-color1 text-light btn-color1' size="lg">
                                    Log In
                                </Button>
                            </div>
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