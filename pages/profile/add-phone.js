import React, { useEffect, useState } from 'react'
import { Container, Row, Col, InputGroup, FormControl, Form } from 'react-bootstrap'
import SideBar from '../../components/SideBar'
import Navbar from '../../components/Navbar'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Button from 'react-bootstrap/Button'
import { addPhone } from '../../redux/actions/auth'
import { useDispatch, useSelector } from 'react-redux'

const AddPhone = () => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [value, setValue] = useState()
    const phone = String(value)

    const handleSubmit = (e) => {
        const token = window.localStorage.getItem('token')
        e.preventDefault()
        dispatch(addPhone(token, phone))
    }

    useEffect(() => {
        // console.log(phone)
    }, [phone])
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
                                        <Col sm={12}>
                                            <Form onSubmit={handleSubmit}>
                                                <Row>
                                                    <Col sm={12} md={5} className="my-5 ">
                                                        <h5>Add Phone Number</h5>
                                                        <div>Add at least one phone number
                                                            for the transfer ID so you can
                                                            start transfering your money
                                                            to another user.
                                                        </div>
                                                    </Col>
                                                    <Col xs={12} md={6}>
                                                    </Col>
                                                    <Col xs={12} md={2}>
                                                    </Col>
                                                    <Col xs={12} md={6}>
                                                        <div className="d-grid gap-2">
                                                            <PhoneInput
                                                                placeholder="Enter phone number"
                                                                value={value}
                                                                onChange={setValue}
                                                            />
                                                        </div>
                                                        <div className="d-grid gap-2 mt-4">
                                                            <Button style={{ alignItems: "center" }} type="submit" variant="color6" className='btn mx-5 py-2 my-2 rounded-btn2 bg-color6 border-0 text-secondary btn-secondary d-flex justify-content-center' size="lg">
                                                                <h5>Add Phone Number</h5>
                                                            </Button>
                                                        </div>
                                                    </Col>
                                                    <Col xs={12} md={3}>
                                                    </Col>
                                                </Row>
                                            </Form>
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

export default AddPhone