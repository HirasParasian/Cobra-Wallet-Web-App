import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
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

const Transfer = () => {
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
                                    <h4>Transfer Money</h4>
                                </div>
                                {/* {users?.map((data, idx) => {
                                    return (
                                        <CardTransfer key={String(idx)} name={data?.fullName} photo={data?.picture || photo} phoneNumber={""} />
                                    )
                                })} */}
                                <div>
                                    Type the amount you want to transfer and then
                                    press continue to the next steps.
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <CurrencyInput
                                        id="inputAmount"
                                        name="inputAmount"
                                        defaultValue={10000}
                                        decimalsLimit={2}
                                        prefix="Rp. "
                                        className='border-0 py-3 mt-5 text-center'
                                        onValueChange={(value, name) => console.log(value, name)}
                                    />
                                </div>
                                <h5 className='text-center'> Rp 120.00 Available</h5>
                                <div className="d-grid gap-2">
                                    <Input name="email" type="email" placeholder='Add some notes ..' className='py-3 my-2 mx-5' icon={<FiEdit2 />} />
                                </div>
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
export default Transfer