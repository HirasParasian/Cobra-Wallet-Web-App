import React, { useEffect } from 'react'
import { Container, Row, Col, InputGroup, FormControl, Form, Button } from 'react-bootstrap'
import SideBar from '../../components/SideBar'
import Navbar from '../../components/Navbar'
import Input from '../../components/Input'
import { FaLock } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import Pin from '../../components/ConfirmPin'
import { useSelector } from "react-redux"
import { useRouter } from "next/router"
import { changePin } from '../../redux/actions/auth'

const ChangePin = () => {
    const router = useRouter()
    const code = useSelector(state => state.code)
    console.log(code)
    useEffect(() => {
        if (code?.newCode.length < 6) {
            document.getElementById("confirm").disabled = true;
        } else {
            document.getElementById("confirm").disabled = false;
        }
    }, [code])
    const dispatch = useDispatch()
    const onEditPin = (e) => {
        e.preventDefault()
        const token = window.localStorage.getItem('token')
        const oldPin = code?.code
        const newPin = code?.newCode
        const data = { oldPin, newPin }
        dispatch(changePin(token, data))
        window.scrollTo(0, 0)
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
                                    <Form onSubmit={onEditPin}>
                                        <Row>
                                            <Col sm={12} md={5} className="my-5 ">
                                                <h5>Change Pin</h5>
                                                <div>Enter your current 6 digits
                                                    Zwallet PIN below to continue
                                                    to the next steps.
                                                </div>
                                            </Col>
                                            <Col xs={12} md={7}>
                                            </Col>
                                            <div className='d-flex justify-content-center'>
                                                <Pin />
                                            </div>
                                            <div className="d-grid gap-2">
                                                <Button id="confirm" style={{ alignItems: "center" }} type="submit" variant="color6" className='btn mx-5 py-2 my-4 rounded-btn2 bg-color1 border-0 text-light btn-secondary d-flex justify-content-center' size="lg">
                                                    <h5>Continue</h5>
                                                </Button>
                                            </div>
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

export default ChangePin