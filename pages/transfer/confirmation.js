import React, { useEffect, useState } from 'react'
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap'
import SideBar from '../../components/SideBar'
import Navbar from '../../components/Navbar'
import CardTransfer from '../../components/CardTransfer'
import photo from "../../images/navimg.png"
import Input from '../../components/Input'
import { FiEdit2 } from 'react-icons/fi'
import { getUser } from '../../redux/actions/user'
import { useSelector, useDispatch } from 'react-redux'
import http from '../../helpers/http'
import CurrencyInput from 'react-currency-input-field';
import Button from 'react-bootstrap/Button'
import Link from 'next/link'

const Confirmations = () => {
    // const user = useSelector(state => state.user)
    // const [users, setUsers] = useState([])
    // const [errorMsg, setErrorMsg] = useState(null)

    // useEffect(() => {
    //     getUserSearch(`users`)
    // }, [])

    // const getUserSearch = async (url) => {
    //     const token = window.localStorage.getItem('token')
    //     const { data } = await http(token).get(url)
    //     setUsers(data?.results)
    // }
    return (
        <>
            <Navbar />
            <Container className='my-5'>
                <Row>
                    <Col sm={12} md={3}>
                        <SideBar />
                    </Col>
                    <Col>
                        <Row>
                            <Col xs={12} className="shadow rounded-btn2 py-5 px-5">
                                <div>
                                    <h4>Transfer To</h4>
                                </div>
                                {/* {users?.map((data, idx) => {
                                    return (
                                        <CardTransfer key={String(idx)} name={data?.fullName} photo={data?.picture || photo} phoneNumber={""} />
                                    )
                                })} */}
                                <div>
                                    <h4>Details</h4>
                                </div>
                                <Row className='shadow-sm my-2 mt-3 mx-2 rounded-btn2'>
                                    <Col sm={12} className='d-flex flex-column'>
                                        <div className='my-2 ms-3'>Amount :</div>
                                        <InputGroup className="mb-3 border-0">
                                            <FormControl size='lg' defaultValue={"100.000"} readOnly className="bg-transparent mb-0 py-3 border-0" aria-label="First name" />
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <Row className='shadow-sm my-2 mt-3 mx-2 rounded-btn2'>
                                    <Col sm={12} className='d-flex flex-column'>
                                        <div className='my-2 ms-3'>Balance Left :</div>
                                        <InputGroup className="mb-3 border-0">
                                            <FormControl size='lg' defaultValue={"20.000"} readOnly className="bg-transparent mb-0 py-3 border-0" aria-label="First name" />
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <Row className='shadow-sm my-2 mt-3 mx-2 rounded-btn2'>
                                    <Col sm={12} className='d-flex flex-column'>
                                        <div className='my-2 ms-3'>Date & Time :</div>
                                        <InputGroup className="mb-3 border-0">
                                            <FormControl size='lg' defaultValue={"May 11, 2020 - 12.20"} readOnly className="bg-transparent mb-0 py-3 border-0" aria-label="First name" />
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <Row className='shadow-sm my-2 mt-3 mx-2 rounded-btn2'>
                                    <Col sm={12} className='d-flex flex-column'>
                                        <div className='my-2 ms-3'>Notes :</div>
                                        <InputGroup className="mb-3 border-0">
                                            <FormControl size='lg' defaultValue={"For buying some socks"} readOnly className="bg-transparent mb-0 py-3 border-0" aria-label="First name" />
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <Link href={'/transfer/confirmation'} passHref>
                                    <Button style={{ alignItems: "center" }} type="submit" variant="color6" className='inline-block btn mx-5 py-3 my-2 rounded-btn2 bg-color6 border-0 text-dark btn-secondary d-flex justify-content-end' size="lg">
                                        <h5>Continue</h5>
                                    </Button>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Confirmations