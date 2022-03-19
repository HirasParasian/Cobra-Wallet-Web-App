
import { Container, Row, Col, Image } from 'react-bootstrap'
import SideBar from '../components/SideBar'
import Navbar from '../components/Navbar'
import profiles from "../images/navimg.png"
import Button from 'react-bootstrap/Button'
import { GrLinkNext } from 'react-icons/gr'


const profile = () => {
    return (
        <>
            <Navbar />
            <Container className='my-5'>
                <Row>
                    <Col xs={12} md={3}>
                        <SideBar />
                    </Col>
                    <Col>
                        <Row>
                            <Col xs={12}>
                                <Row>
                                    <Col xs={3}>
                                    </Col>
                                    <Col xs={6}>
                                        <div className='d-flex justify-content-center'>
                                            <Image
                                                alt="profile"
                                                src={profiles}
                                                width="80"
                                                height="80"
                                            // fluid
                                            // thumbnail
                                            />
                                        </div>
                                        <div className="d-grid gap-2">
                                            <Button style={{ alignItems: "center" }} type="submit" variant="color6" className='btn mx-5 py-3 my-2 rounded-btn2 bg-color6 border-0 text-dark btn-secondary d-flex justify-content-between' size="lg">
                                                <h5>Personal Information</h5> <GrLinkNext />
                                            </Button>
                                        </div>
                                        <div className="d-grid gap-2">
                                            <Button style={{ alignItems: "center" }} type="submit" variant="color6" className='btn mx-5 py-3 my-2 rounded-btn2 bg-color6 border-0 text-dark btn-secondary d-flex justify-content-between' size="lg">
                                                <h5>Change Password</h5> <GrLinkNext />
                                            </Button>
                                        </div>
                                        <div className="d-grid gap-2">
                                            <Button style={{ alignItems: "center" }} type="submit" variant="color6" className='btn mx-5 py-3 my-2 rounded-btn2 bg-color6 border-0 text-dark btn-secondary d-flex justify-content-between' size="lg">
                                                <h5>Change PIN</h5> <GrLinkNext />
                                            </Button>
                                        </div>
                                        <div className="d-grid gap-2">
                                            <Button style={{ alignItems: "center" }} type="submit" variant="color6" className='btn mx-5 py-3 my-2 rounded-btn2 bg-color6 border-0 text-dark btn-secondary d-flex justify-content-between' size="lg">
                                                <h5>Logout</h5> <GrLinkNext />
                                            </Button>
                                        </div>
                                    </Col>
                                    <Col xs={3}>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default profile