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
import ModalSuccess from '../../components/ModalSuccess'
import ModalLoading from '../../components/ModalLoading'
import { useRouter } from "next/router"

export const PersonalInformation = () => {
    const router = useRouter()
    const auth = useSelector(state => state.auth?.userData)
    const tokens = useSelector(state => state.auth)
    const fullName = String(auth?.fullName)
    const name = fullName?.split(" ");
    const name2 = name?.slice(1)
    const dispatch = useDispatch()
    useEffect(() => {
        if (!auth.token) {
            const token = window.localStorage.getItem('token')
            if (token) {
                dispatch(getProfile(token))
                dispatch({ type: 'CLEAR_MESSAGE' });
            } else {
                window.alert('Please login first')
                router.push('/login')
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
        dispatch({ type: 'CLEAR_MESSAGE' });
        window.scrollTo(0, 0)
    }
    return (
        <>
            <Navbar />
            <ModalSuccess message={tokens.successMsg} />
            <ModalLoading isLoading={tokens.isLoading == true} />
            <Container className='my-5'>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm">UNAUTHORIZE</button>
                <div className="modal fade bd-example-modal-sm" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-sm">
                        <div className="modal-content">
                            ...
                        </div>
                    </div>
                </div>
                <Row>
                    <Col xs={12} md={3}>
                        <SideBar />
                    </Col>
                    <Col>
                        <Row>
                            <Col xs={12}>
                                <Container className='shadow py-3 rounded-btn2 vh-100'>
                                    <Form onSubmit={onEditProfile} className="h-100">
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
                                                    <FormControl name="firstName" size='lg' defaultValue={name?.slice(0, 1)} className="mb-0 py-3 border-0" aria-label="First name" />
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                        <Row className='shadow my-2 mt-3 mx-2 rounded-btn2'>
                                            <Col sm={12} className='d-flex flex-column'>
                                                <div className='my-2 ms-3'>Last Name :</div>
                                                <InputGroup className="mb-3 border-0">
                                                    <FormControl name="lastName" size='lg' defaultValue={name2.join(' ')} className="mb-0 py-3 border-0" aria-label="First name" />
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
                                                <Link href="/profile/add-phone">
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