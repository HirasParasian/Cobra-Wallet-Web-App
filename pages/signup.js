import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import Link from 'next/link'

const login = () => {
    return (
        <>
            <headers>
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
                            <Input type="text" autoComplete='off' placeholder='First Name ..' className='py-3 my-2 mx-4' startAdornment={<InputAdornment position="start"><PersonIcon /></InputAdornment>} />
                            <Input type="text" autoComplete='off' placeholder='Last Name ..' className='py-3 my-2 mx-4' startAdornment={<InputAdornment position="start"><PersonIcon /></InputAdornment>} />
                            <Input type="email" autoComplete='off' placeholder='Email ..' className='py-3 my-2 mx-4' startAdornment={<InputAdornment position="start"><EmailOutlinedIcon /></InputAdornment>} />
                            <Input type='password' autoComplete='off' placeholder='Password ..' className='py-3 mx-4' startAdornment={<InputAdornment position="start"><LockIcon /></InputAdornment>} />
                            <div className='mx-4 my-4'>
                                <Link href='/forgotpassword' >
                                    <a className="d-flex justify-content-end text-decoration-none text-color3">
                                        Forgot Password?
                                    </a>
                                </Link>
                            </div>
                            <Button className='mx-4 py-3 my-5 rounded-btn bg-color3' variant="contained" >
                                Delete
                            </Button>
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
            </headers>

        </>
    )
}
export default login