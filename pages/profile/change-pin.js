import React, { useEffect } from 'react'
import { Container, Row, Col, InputGroup, FormControl, Form, Button } from 'react-bootstrap'
import SideBar from '../../components/SideBar'
import Navbar from '../../components/Navbar'
import Input from '../../components/Input'
import { FaLock } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { changePassword } from '../../redux/actions/auth'
import Pin from '../../components/Pin'

const ChangePin = () => {
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        router.push('/confirm-pin')
    }
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
                                <Container className='shadow py-3 rounded-btn2 vh-100'>
                                    <Form onSubmit={handleSubmit}>
                                        <Pin />
                                    </Form>
                                    <div className="d-grid gap-2">
                                        <Button style={{ alignItems: "center" }} type="submit" variant="color6" className='btn mx-5 py-2 my-4 rounded-btn2 bg-color6 border-0 text-dark btn-secondary d-flex justify-content-center' size="lg">
                                            <h5>Continue</h5>
                                        </Button>
                                    </div>
                                </Container>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ChangePin