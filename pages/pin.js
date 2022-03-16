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
                            <h2 className='mx-4 my-5'>
                                Secure Your Account, Your Wallet,
                                and Your Data With 6 Digits PIN
                                That You Created Yourself.
                            </h2>
                            <p className='mx-4 my-3'>
                                Create 6 digits pin to secure all
                                your money and your data in Zwallet
                                app. Keep it secret and don’t tell
                                anyone about your Zwallet account
                                password and the PIN.
                            </p>
                            <div className='d-flex'>
                                <Input type="password" autoComplete='off' className='py-3 my-2 mx-4 text-center' />
                                <Input type="password" autoComplete='off' className='py-3 my-2 mx-4 text-center' />
                                <Input type="password" autoComplete='off' className='py-3 my-2 mx-4 text-center' />
                                <Input type='password' autoComplete='off' className='py-3 my-2 mx-4 text-center' />
                            </div>
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
export default login