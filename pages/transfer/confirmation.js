import React, { useState } from 'react'
import { Container, Row, Col, InputGroup, FormControl, Modal, Form } from 'react-bootstrap'
import SideBar from '../../components/SideBar'
import Navbar from '../../components/Navbar'
import Pin from '../../components/Pin'
import { useSelector, useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button'
import { useRouter } from "next/router";
import { Transfer } from '../../redux/actions/transactions'
import ModalSuccess from '../../components/ModalSuccess'
import ModalError from '../../components/ModalError'

function MydModalWithGrid(props) {
    const user = useSelector(state => state.user);
    const { recepientDetail } = user
    const amount = useSelector(state => state.transactions.transferAmount)
    const notes = useSelector(state => state.transactions.notes)
    const code = useSelector(state => state.code)
    console.log(code)
    console.log(recepientDetail)
    const dispatch = useDispatch()
    const router = useRouter()
    const handleSubmit2 = async (e) => {
        const token = window.localStorage.getItem('token')
        e.preventDefault()
        console.log("token :" + token + "pin :" + code + "amount : " + amount)
        dispatch(Transfer(token, amount, notes, code?.code, recepientDetail.id))
    }
    return (

        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header className='border-0' closeButton>
                <div><h5>Transfer</h5></div>
            </Modal.Header>

            <Modal.Body className="show-grid">
                <Form onSubmit={handleSubmit2}>
                    <div className='mb-5'>Enter the amount of money, and click submit</div>
                    <Container>
                        <Pin />
                        <Button className='bg-color1 text-light' type="submit">Submit</Button>
                    </Container>

                </Form>
            </Modal.Body>
        </Modal>

    );
}

const Confirmations = () => {
    const [modalShow, setModalShow] = useState(false);
    const router = useRouter();
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)
    const user = useSelector(state => state.user);
    const transfer = useSelector(state => state.transactions);
    const { recepientDetail } = user
    const route = useRouter();
    const balance = useSelector(state => state.auth?.balance)
    return (
        <>
            <Navbar />
            <ModalSuccess message={auth.successMsg} />
            <ModalError message={auth.errorMsg} />
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
                                        <div className='my-2 ms-3'>Amount : </div>
                                        <InputGroup className="mb-3 border-0">
                                            <FormControl size='lg' defaultValue={transfer?.transferAmount} readOnly className="bg-transparent mb-0 py-3 border-0" aria-label="First name" />
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <Row className='shadow-sm my-2 mt-3 mx-2 rounded-btn2'>
                                    <Col sm={12} className='d-flex flex-column'>
                                        <div className='my-2 ms-3'>Balance Left :</div>
                                        <InputGroup className="mb-3 border-0">
                                            <FormControl size='lg' defaultValue={transfer.balanceLeft} readOnly className="bg-transparent mb-0 py-3 border-0" aria-label="First name" />
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <Row className='shadow-sm my-2 mt-3 mx-2 rounded-btn2'>
                                    <Col sm={12} className='d-flex flex-column'>
                                        <div className='my-2 ms-3'>Date & Time :</div>
                                        <InputGroup className="mb-3 border-0">
                                            <FormControl size='lg' defaultValue={transfer?.date} readOnly className="bg-transparent mb-0 py-3 border-0" aria-label="First name" />
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
                                <Button onClick={() => setModalShow(true)} style={{ alignItems: "center" }} type="submit" variant="color6" className='inline-block btn mx-5 py-3 my-2 rounded-btn2 bg-color6 border-0 text-dark btn-secondary d-flex justify-content-end' size="lg">
                                    <h5>Continue</h5>
                                </Button>
                                <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Confirmations