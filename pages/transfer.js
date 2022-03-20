import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SideBar from '../components/SideBar'
import Navbar from '../components/Navbar'
import CardTransfer from '../components/CardTransfer'
import photo from "../images/navimg.png"
import Input from '../components/Input'
import { FaSearch } from 'react-icons/fa'
import { getUser } from '../redux/actions/user'
import { useSelector, useDispatch } from 'react-redux'
import http from '../helpers/http'

const Transfer = () => {
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
    const goToDetail = (id) => {
        route.push(`/transfer/input-amount/${id}`)
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
                                        <CardTransfer onClick={() => goToDetail(data?.id)} style={{ cursor: 'pointer' }} key={String(idx)} name={data?.fullName} photo={data?.picture || photo} phoneNumber={""} />
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