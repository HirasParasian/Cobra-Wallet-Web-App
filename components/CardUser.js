import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image from "next/image"
import photo from "../images/navimg.png"

const CardUser = () => {
    return (
        <div className='d-grid'>
            <Row>
                <Col sm={12} md={4} className=''>
                    <Image
                        alt=""
                        src={photo}
                        width="70"
                        height="70"
                        className='align-center'

                    />
                </Col>
                <Col sm={12} md={4} className='d-flex flex-column'>
                    <div><b>Samuel Suhi</b></div>
                    <p>Accept</p>
                </Col>
                <Col sm={12} md={4} className='mt-2'>
                    <div className='text-success'><b>+Rp50.000</b></div>
                </Col>
            </Row>
        </div>
    )
}

export default CardUser