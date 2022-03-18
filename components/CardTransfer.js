import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image from "next/image"

const CardTransfer = ({ name, phoneNumber, photo }) => {
    return (
        <div className='d-grid'>
            <Row>
                <Col sm={12} md={1} className=''>
                    <Image
                        alt=""
                        src={photo}
                        width="70"
                        height="70"
                        className='align-center'

                    />
                </Col>
                <Col sm={12} md={11} className='d-flex flex-column'>
                    <div><b>{name}</b></div>
                    <p>{phoneNumber}</p>
                </Col>
            </Row>
        </div>
    )
}

export default CardTransfer