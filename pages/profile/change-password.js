import React, { useEffect } from 'react'
import { Container, Row, Col, InputGroup, FormControl, Form, Button } from 'react-bootstrap'
import SideBar from '../../components/SideBar'
import Navbar from '../../components/Navbar'
import Input from '../../components/Input'
import { FaLock } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { changePassword } from '../../redux/actions/auth'
import ModalSuccess from '../../components/ModalSuccess'
import ModalLoading from '../../components/ModalLoading'

const ChangePassword = () => {
    const dispatch = useDispatch()
    const tokens = useSelector(state => state.auth)
    const onEditPassword = (e) => {
        e.preventDefault()
        const token = window.localStorage.getItem('token')
        const oldPassword = e.target.elements['currentPassword'].value
        const newPassword = e.target.elements['newPassword'].value
        const confirmPassword = e.target.elements['confirmPassword'].value
        const data = { oldPassword, newPassword, confirmPassword }
        dispatch(changePassword(token, data))
        dispatch({ type: 'CLEAR_MESSAGE' });
        window.scrollTo(0, 0)
    }
    return (
        <>
            <Navbar />
            <ModalSuccess message={tokens.successMsg} />
            <ModalSuccess message={tokens.errMsg} />
            <ModalLoading isLoading={tokens.isLoading == true} />
            <Container className='my-5'>
                <Row>
                    <Col xs={12} md={3}>
                        <SideBar />
                    </Col>
                    <Col xs={12} md={9}>
                        <Row>
                            <Col xs={12}>
                                <Container className='shadow pb-3 rounded-btn2 vh-100'>
                                    <Form onSubmit={onEditPassword}>
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
                                                <div className="d-grid gap-2">
                                                    <Button style={{ alignItems: "center" }} type="submit" variant="color6" className='btn mx-5 py-2 my-4 rounded-btn2 bg-color6 border-0 text-dark btn-secondary d-flex justify-content-center' size="lg">
                                                        <h5>Change Password</h5>
                                                    </Button>
                                                </div>
                                            </Col>
                                            <Col xs={12} md={3}>
                                            </Col>
                                        </Row>
                                    </Form>
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