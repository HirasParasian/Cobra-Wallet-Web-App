import React, { useEffect } from 'react'
import { Container, Row, Col, InputGroup, FormControl, Form } from 'react-bootstrap'
import SideBar from '../../components/SideBar'
import Navbar from '../../components/Navbar'
import Link from 'next/link'
import Input from '../../components/Input'
import { getProfile, editProfiles } from '../../redux/actions/auth'
import { useSelector, useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button'
import { FiSave } from 'react-icons/fi'

export const PersonalInformation = () => {
    const auth = useSelector(state => state.auth?.userData)
    const fullName = String(auth?.fullName)
    const name = fullName?.split(" ");
    const name2 = name?.slice(1)
    let firstName = name?.slice(0, 1)
    let lastName = name2
    const dispatch = useDispatch()
    useEffect(() => {
        if (!auth.token) {
            const token = window.localStorage.getItem('token')
            if (token) {
                dispatch(getProfile(token))
                dispatch({ type: 'CLEAR_MESSAGE' });
            } else {
                window.alert('Please login first')
                navigate('/login')
            }
        }
    }, [])
    const onEditProfile = (e) => {
        e.preventDefault()
        dispatch({ type: "CLEAR_MESSAGE" })
        const firstName = e.target.elements['firstName'].value
        const lastName = e.target.elements['lastName'].value
        fullName = firstName + " " + lastName
        console.log(fullName)
        const token = window.localStorage.getItem('token')
        dispatch(editProfiles(token, fullName))
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
                    <Col>
                        <Row>
                            <Col xs={12}>
                                <Container className='shadow py-3 rounded-btn2'>
                                    <Form onSubmit={onEditProfile}>
                                        <Row>
                                            <Col sm={12} md={5}>
                                                <h5>Personal Information</h5>
                                                <div>We got your personal information from the sign
                                                    up proccess. If you want to make changes on your
                                                    information, contact our support.
                                                </div>
                                            </Col>
                                            <Col sm={12} md={7} className="d-flex justify-content-end">
                                                <div className='d-grid'>
                                                    <Button type="submit" className='border-0 bg-color1 rounded-btn2'> <FiSave /> Save </Button>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className='shadow my-2 mt-5 mx-2 rounded-btn2'>
                                            <Col sm={12} className='d-flex flex-column'>
                                                <div className='my-2 ms-3'>First Name :</div>
                                                <InputGroup className="mb-3 border-0">
                                                    <FormControl name="firstName" size='lg' defaultValue={firstName} className="mb-0 py-3 border-0" aria-label="First name" />
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                        <Row className='shadow my-2 mt-3 mx-2 rounded-btn2'>
                                            <Col sm={12} className='d-flex flex-column'>
                                                <div className='my-2 ms-3'>Last Name :</div>
                                                <InputGroup className="mb-3 border-0">
                                                    <FormControl name="lastName" size='lg' defaultValue={lastName} className="mb-0 py-3 border-0" aria-label="First name" />
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                        <Row className='shadow my-2 mt-3 mx-2 rounded-btn2'>
                                            <Col sm={12} className='d-flex flex-column'>
                                                <div className='my-2 ms-3'>Verified E-mail :</div>
                                                <InputGroup className="mb-3 border-0">
                                                    <FormControl size='lg' defaultValue={"pewdiepie1@gmail.com"} readOnly className="bg-transparent mb-0 py-3 border-0" aria-label="First name" />
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                        <Row className='shadow my-2 mt-3 mx-2 rounded-btn2'>
                                            <Col sm={12} md={8} className='d-flex flex-column'>
                                                <div className='my-2 ms-3'>Phone Number</div>
                                                <InputGroup className="mb-3 border-0">
                                                    <FormControl size='lg' defaultValue={"+62 813-9387-7946"} readOnly className="bg-transparent mb-0 py-3 border-0" aria-label="First name" />
                                                </InputGroup>
                                            </Col>
                                            <Col sm={12} md={4} style={{ alignItems: "center" }} className='d-flex justify-content-center align-item-center'>
                                                <Link href="/profile/personal-information/manage-phone">
                                                    <a className='text-decoration-none'> Manage </a>
                                                </Link>
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
export default PersonalInformation