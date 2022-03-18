
import { Container, Row, Col } from 'react-bootstrap'
import SideBar from '../components/SideBar'
import Navbar from '../components/Navbar'


const history = () => {
    return (
        <>
            <Navbar />
            <Container className='my-5'>
                <Row>
                    <Col xs={3}>
                        <SideBar />
                    </Col>
                    <Col>
                        <Row>
                            <Col xs={12}>

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default history