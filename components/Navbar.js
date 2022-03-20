import React, { useEffect, useState } from 'react'
import Image from "next/image"
import { Navbar, Container, Row, Col, Button, Toast } from "react-bootstrap"
import photo from "../images/navimg.png"
import { BsBell } from "react-icons/bs"
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import { getTransaction } from '../redux/actions/user'

const Navbars = () => {
    const auth = useSelector(state => state.auth?.userData)
    const notif = useSelector(state => state.user?.transactions)
    console.log(notif)
    const dispatch = useDispatch()
    useEffect(() => {
        const token = window.localStorage.getItem('token')
        dispatch(getTransaction(token))
    }, [])
    const [showB, setShowB] = useState(true);
    const toggleShowB = () => setShowB(!showB);
    return (
        <>
            <>
                <Navbar bg="color1" variant="dark">
                    <Container>
                        <Navbar.Text className='d-flex flex-column ms-5'>
                            <h4 className='text-light'>Zwallet</h4>
                        </Navbar.Text>
                        <Navbar.Brand href="/profile" className='d-flex text-align-center ms-auto'>
                            <Image
                                alt=""
                                src={auth?.picture || photo}
                                width="60"
                                height="60"
                                className="align-top rounded-btn"
                            />
                        </Navbar.Brand>
                        <Navbar.Text className='d-flex flex-column'>
                            <p className=' text-decoration-none mt-2'>{auth?.fullName}</p>
                            <p className=' text-decoration-none'>+62 8139 3877 7946</p>
                        </Navbar.Text>
                        <Navbar.Text className='d-flex flex-column ms-5'>
                            <BsBell onClick={toggleShowB} size={25} color={"white"} />
                        </Navbar.Text>
                    </Container>
                </Navbar>
                <Row>
                    <Col md={6} className="mb-2 position-absolute end-0 bg-light rounded-btn2">
                        <Toast onClose={toggleShowB} show={showB} animation={false}>
                            <Toast.Body>

                                {notif?.map((data, idx) => {
                                    return (
                                        <>
                                            <Row className='px-3 mx-2 my-3 rounded-btn-2 shadow-sm'>
                                                <Col xs={3}>
                                                    {data?.mutation_type.id == 1 && <AiOutlineArrowDown size={30} color="green" />}
                                                    {data?.mutation_type.id == 2 && <AiOutlineArrowDown size={30} color="red" />}
                                                    {data?.mutation_type.id == 3 && <AiOutlineArrowUp size={30} color="red" />}
                                                </Col>
                                                <Col xs={9} classNam="d-flex flex-column">
                                                    <h5>{data?.amount}</h5>
                                                    <h5>{data?.mutation_type.name}</h5>
                                                </Col>`
                                            </Row>
                                        </>
                                    )
                                })}

                            </Toast.Body>
                        </Toast>
                    </Col>
                </Row>
            </></>
    )
}
export default Navbars