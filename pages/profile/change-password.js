import React, { useEffect } from 'react'
import { Container, Row, Col, InputGroup, FormControl, Form } from 'react-bootstrap'
import SideBar from '../../components/SideBar'
import Navbar from '../../components/Navbar'
import Input from '../../components/Input'
import { FaLock } from 'react-icons/fa'

const ChangePassword = () => {
    return (
        <>
            <Navbar />
            <Container className='my-5'>
                <Row>
                    <Col xs={12} md={3}>
                        <SideBar />
                    </Col>
                    <Col xs={12} md={9}>
                        <Row>
                            <Col xs={12}>
                                <Container className='shadow pb-3 rounded-btn2 vh-100'>
                                    <Row>
                                        <Col sm={12} md={5} className="my-5 ">
                                            <h5>Change Password</h5>
                                            <div>You must enter your current
                                                password and then type your
                                                new password twice.
                                            </div>
                                        </Col>
                                        <Col xs={12} md={7}>
                                        </Col>
                                        <Col xs={12} md={3}>
                                        </Col>
                                        <Col xs={12} md={6}>
                                            <div className="d-grid gap-2">
                                                <Input name="currentPassword" type='password' placeholder='Current Password ..' className='py-3 mx-4' icon={<FaLock color='rgba(169, 169, 169, 0.6)' />} />
                                                <Input name="newPassword" type='password' placeholder='New Password ..' className='py-3 mx-4' icon={<FaLock color='rgba(169, 169, 169, 0.6)' />} />
                                                <Input name="confirmPassword" type='password' placeholder='Confirm Password ..' className='py-3 mx-4' icon={<FaLock color='rgba(169, 169, 169, 0.6)' />} />
                                            </div>
                                        </Col>
                                        <Col xs={12} md={3}>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ChangePassword