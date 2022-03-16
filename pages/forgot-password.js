import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import Link from 'next/link'

const pin = () => {
    return (
        <>
            <headers>
                <Container>
                    <Row>
                        <Col sm={12} md={7} className="bg-color2">
                        </Col>
                        <Col sm={12} md={5} className="d-grid ">
                            <h2 className='mx-4 my-5'>
                                Did You Forgot Your Password?
                                Don’t Worry, You Can Reset Your
                                Password In a Minutes.
                            </h2>
                            <p className='mx-4 my-3'>
                                To reset your password, you must
                                type your e-mail and we will send
                                a link to your email and you will
                                be directed to the reset password screens.
                            </p>
                            <Input type="email" autoComplete='off' placeholder='Email ..' className='py-3 my-2 mx-4' startAdornment={<InputAdornment position="start"><EmailOutlinedIcon /></InputAdornment>} />
                            <div className='mx-4 my-4'>
                            </div>
                            <Button className='mx-4 py-3 my-5 rounded-btn bg-color3' variant="contained" >
                                Confirm
                            </Button>
                            <div className="d-flex justify-content-center my-5">
                            </div>
                        </Col>
                    </Row>
                </Container>
            </headers>

        </>
    )
}
export default pin