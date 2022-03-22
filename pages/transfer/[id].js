import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
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
import { useRouter } from "next/router";
import NumberFormat from 'react-number-format';
import { getBalance } from '../../redux/actions/auth'
import { setDateTime, setBalanceLeft, setNotes, setTransferAmount } from "../../redux/actions/transactions";
const Transfer = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)
    let balance = String(auth?.balance)
    let available = auth?.balance
    const user = useSelector(state => state.user);
    const { recepientDetail } = user
    const route = useRouter();
    // const balance = useSelector(state => state.auth?.balance)
    console.log(balance)
    useEffect(() => {
        const token = window.localStorage.getItem('token')
        dispatch(getBalance(token))
    }, [])
    const handleClick = (e) => {
        e.preventDefault();
        const amount = e.target.elements['amount'].value
        const notes = e.target.elements['notes'].value
        const date = Date.now();
        let available = auth?.balance
        const balanceNow = (available - amount)
        // const transfer = { amount, notes, balanceLeft, date }
        if (amount > available) {
            alert('nominal exceeds the limit')
        } else if (!amount) {
            alert('Please fill nominal transfer')
        } else {
            dispatch(setTransferAmount(amount))
            dispatch(setDateTime(date))
            dispatch(setNotes(notes))
            dispatch(setBalanceLeft(balanceNow))
            route.push('/transfer/confirmation');
        }
    }
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
                                <Form onSubmit={handleClick}>
                                    <div>
                                        <h4>Transfer Money</h4>
                                    </div>
                                    <CardTransfer name={recepientDetail?.fullName} photo={recepientDetail?.picture || photo} phoneNumber={""} />
                                    <div>
                                        Type the amount you want to transfer and then
                                        press continue to the next steps.
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <Input defaultValue={10000} id="amount" name="amount" type="number" className='py-3 my-2 mx-5' icon={<FiEdit2 />} />
                                    </div>
                                    <h5 className='text-center'>
                                        Available  : <NumberFormat value={balance} prefix={'Rp. '} mask="." thousandSeparator={true} displayType={'text'} />
                                    </h5>
                                    <div className="d-grid gap-2">
                                        <Input defaultValue={'test'} id="notes" name="notes" type="text" placeholder='Add some notes ..' className='py-3 my-2 mx-5' icon={<FiEdit2 />} />
                                    </div>
                                    <Button style={{ alignItems: "center" }} type="submit" variant="color6" className='inline-block btn mx-5 py-3 my-2 rounded-btn2 bg-color6 border-0 text-dark btn-secondary d-flex justify-content-end' size="lg">
                                        <h5>Continue</h5>
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Transfer