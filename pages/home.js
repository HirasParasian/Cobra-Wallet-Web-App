import React, { useEffect, useState } from 'react'
import BarChart from '../components/BarChart'
import SideBar from '../components/SideBar'
import Navbar from '../components/Navbar'
import Input from '../components/WInput'
import { Container, Row, Col, Nav, Modal, Button, Form } from 'react-bootstrap'
import Image from "next/image"
import photo from "../images/navimg.png"
import { getBalance, getPhone, topUp } from '../redux/actions/auth'
import { useSelector, useDispatch } from 'react-redux'
import NumberFormat from 'react-number-format';
function MydModalWithGrid(props) {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const handleSubmit2 = (e) => {
        const token = window.localStorage.getItem('token')
        e.preventDefault()
        const amount = e.target.elements['amount'].value
        dispatch(topUp(token, amount))
    }
    return (

        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header className='border-0' closeButton>
                <div><h5>Top Up</h5></div>
            </Modal.Header>

            <Modal.Body className="show-grid">
                <Form onSubmit={handleSubmit2}>
                    <div className='mb-5'>Enter the amount of money, and click submit</div>
                    <Container>
                        <Row>
                            <Col xs={12}>
                                <div className="d-grid gap-2">
                                    <Input name="amount" type="number" className=' py-3 my-2 mx-5' />
                                </div>
                            </Col>
                        </Row>
                        <Button className='bg-color1 text-light' type="submit">Submit</Button>
                    </Container>

                </Form>
            </Modal.Body>
        </Modal>

    );
}
export default function Home() {
    const [modalShow, setModalShow] = useState(false);
    const auth = useSelector(state => state.auth)
    let balance = String(auth?.balance)
    const phone = auth?.phone[0]
    // console.log(balance)
    const dispatch = useDispatch()
    useEffect(() => {
        const token = window.localStorage.getItem('token')
        dispatch(getBalance(token))
        dispatch(getPhone(token))
        // console.log()
    }, [])
    return (
        <>
            <style jsx>
                {`
          .banner{
            background-color: #6379F4;
            height: 190px;
            border-radius: 20px;
            display: flex;
            flex-direction: row;
            justify-content: between;
            color: white;
            padding: 30px;
          }
          .banner .section{
            flex: 1;
          }
          .banner .section .button{
            width: 100px;
            padding: 6px;
            border: 1px solid #fff;
            background-color: rgba(255,255,255,0.4);
            color: #fff;
            border-radius: 10px;
          }
        `}
            </style>
            <Navbar />
            <Container className='my-5'>
                <Row>
                    <Col xs={12} md={3}>
                        <SideBar />
                    </Col>
                    <Col>
                        <Row>
                            <Col xs={12} >
                                <div className='col-sm-12 banner bg-color1 shadow'>
                                    <div className="section col-sm-12 col-md-6">
                                        <div>Balance</div>
                                        <h3>
                                            <NumberFormat value={balance} prefix={'Rp. '} mask="." thousandSeparator={true} displayType={'text'} />
                                        </h3>
                                        <div>{phone?.number}</div>
                                    </div>
                                    <div className='col-sm-12 col-md-6 section text-end'>
                                        <div className='mb-2'>
                                            <button className='button'>Transfer</button>
                                        </div>
                                        <div>
                                            <button onClick={() => setModalShow(true)} className='button'>Topup</button>
                                        </div>
                                        <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={7} >
                                <BarChart data={[10, 50, 200, 300]} labels={['1', '2', '3', '4']} income={0} expense={0} />
                            </Col>
                            <Col xs={12} md={5}>
                                <Container className='shadow rounded-btn2 my-3'>
                                    <div className='d-flex justify-content-between'>
                                        <h5>Transaction History</h5>
                                        <div>See All</div>
                                    </div>
                                    <Row className='mt-5 mb-3'>
                                        <Col sm={12} md={4} className=''>
                                            <Image
                                                alt=""
                                                src={photo}
                                                width="70"
                                                height="70"
                                                className='align-center'

                                            />
                                        </Col>
                                        <Col sm={12} md={4} className='d-flex flex-column'>
                                            <div><b>Samuel Suhi</b></div>
                                            <p>Accept</p>
                                        </Col>
                                        <Col sm={12} md={4} className='mt-2'>
                                            <div className='text-success'><b>+Rp50.000</b></div>
                                        </Col>
                                        <Col sm={12} md={4} className=''>
                                            <Image
                                                alt=""
                                                src={photo}
                                                width="70"
                                                height="70"
                                                className='align-center'

                                            />
                                        </Col>
                                        <Col sm={12} md={4} className='d-flex flex-column'>
                                            <div><b>Samuel Suhi</b></div>
                                            <p>Accept</p>
                                        </Col>
                                        <Col sm={12} md={4} className='mt-2'>
                                            <div className='text-success'><b>+Rp50.000</b></div>
                                        </Col>
                                        <Col sm={12} md={4} className=''>
                                            <Image
                                                alt=""
                                                src={photo}
                                                width="70"
                                                height="70"
                                                className='align-center'

                                            />
                                        </Col>
                                        <Col sm={12} md={4} className='d-flex flex-column'>
                                            <div><b>Samuel Suhi</b></div>
                                            <p>Accept</p>
                                        </Col>
                                        <Col sm={12} md={4} className='mt-2'>
                                            <div className='text-success'><b>+Rp50.000</b></div>
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
