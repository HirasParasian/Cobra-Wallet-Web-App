import React, { useEffect } from 'react'
import BarChart from '../components/BarChart'
import SideBar from '../components/SideBar'
import Navbar from '../components/Navbar'
import { Container, Row, Col, Nav } from 'react-bootstrap'
import Image from "next/image"
import photo from "../images/navimg.png"
import { getBalance, getPhone } from '../redux/actions/auth'
import { useSelector, useDispatch } from 'react-redux'

export default function Home() {
    const auth = useSelector(state => state.auth)
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
                                        <h3>Rp.{auth.balance},00</h3>
                                        <div>{auth.phone[0].number}</div>
                                    </div>
                                    <div className='col-sm-12 col-md-6 section text-end'>
                                        <div className='mb-2'>
                                            <button className='button'>Transfer</button>
                                        </div>
                                        <div>
                                            <button className='button'>Topup</button>
                                        </div>
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
