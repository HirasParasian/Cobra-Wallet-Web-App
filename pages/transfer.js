
import { Container, Row, Col } from 'react-bootstrap'
import SideBar from '../components/SideBar'
import Navbar from '../components/Navbar'
import CardTransfer from '../components/CardTransfer'
import photo from "../images/navimg.png"
import Input from '../components/Input'
import { FaSearch } from 'react-icons/fa'
import { getUser } from '../redux/actions/user'
import { useSelector, useDispatch } from 'react-redux'

const Transfer = () => {
    const user = useSelector(state => state.user)
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
export default Transfer