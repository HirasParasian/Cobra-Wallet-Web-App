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
import ModalSuccess from '../components/ModalSuccess'
import ModalError from '../components/ModalError'
import { useRouter } from "next/router"
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
function MydModalWithGrid(props) {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const router = useRouter()
    const handleSubmit2 = async (e) => {
        const token = window.localStorage.getItem('token')
        e.preventDefault()
        const amount = e.target.elements['amount'].value
        await dispatch(topUp(token, amount))
        dispatch(getBalance(token))
        router.push('/home')
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
    const notif = useSelector(state => state.user?.transactions)
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
            <ModalSuccess message={auth.successMsg} />
            <ModalError message={auth.errorMsg} />
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
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
