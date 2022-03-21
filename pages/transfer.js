import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import SideBar from '../components/SideBar'
import Navbar from '../components/Navbar'
import CardTransfer from '../components/CardTransfer'
import photo from "../images/navimg.png"
import Input from '../components/Input'
import { FaSearch } from 'react-icons/fa'
import { getUser } from '../redux/actions/user'
import { useSelector, useDispatch } from 'react-redux'
import { getListUser, setRecepientDetail } from '../redux/actions/user';
import http from '../helpers/http'
import { useRouter } from 'next/router';

const Transfer = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const [users, setUsers] = useState([])
    const [errorMsg, setErrorMsg] = useState(null)

    useEffect(() => {
        getUserSearch(`users`)
    }, [])

    const getUserSearch = async (url) => {
        const token = window.localStorage.getItem('token')
        const { data } = await http(token).get(url)
        setUsers(data?.results)
        console.log(data)
    }
    const transferTo = (recepientId) => {
        const userDetail = users.find(el => el.id === recepientId)
        dispatch(setRecepientDetail(userDetail))
        router.push(`/transfer/${userDetail.id}`)
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
                            <Col xs={12} className="shadow rounded-btn2">
                                <div>
                                    <h4>Search Receiver</h4>
                                </div>
                                <div className="d-grid gap-2">
                                    <Input name="email" type="email" placeholder='Search receiver here ..' className='py-3 my-2 mx-5' icon={<FaSearch />} />
                                </div>
                                {users?.map((data, idx) => {
                                    return (
                                        <>
                                            <div className='d-grid' key={String(data.id)}>
                                                <Container className='shadow rounded-btn my-3 pt-2'>
                                                    <Row>
                                                        <Col sm={12} md={1} className=''>
                                                            <Image
                                                                alt=""
                                                                src={data?.picture || photo}
                                                                width="70"
                                                                height="70"
                                                                className='align-center'
                                                                onClick={() => transferTo(data.id)}
                                                            />
                                                        </Col>
                                                        <Col sm={12} md={11} className='d-flex flex-column'>
                                                            <div><b>{data?.fullName}</b></div>
                                                            <p>{""}</p>
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            </div>
                                            {/* <CardTransfer style={{ cursor: 'pointer' }} key={String(data.id)} name={data?.fullName} photo={data?.picture || photo} phoneNumber={""} />
                                            <button >Click</button> */}
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
export default Transfer