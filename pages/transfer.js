
import { Container, Row, Col } from 'react-bootstrap'
import SideBar from '../components/SideBar'
import Navbar from '../components/Navbar'
import CardTransfer from '../components/CardTransfer'
import photo from "../images/navimg.png"



const transfer = () => {
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
                                <CardTransfer name={"Hiras Parasian"} photo={photo} phoneNumber={"+62 813-8898-1122"} />
                                <CardTransfer name={"Hiras Parasian"} photo={photo} phoneNumber={"+62 813-8898-1122"} />
                                <CardTransfer name={"Hiras Parasian"} photo={photo} phoneNumber={"+62 813-8898-1122"} />
                                <CardTransfer name={"Hiras Parasian"} photo={photo} phoneNumber={"+62 813-8898-1122"} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default transfer