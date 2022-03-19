import React from 'react'
import { Row, Col, Container, Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Pin from '../components/Pin'
import Link from 'next/link'

const pin = () => {
    return (
        <>
            <headers>
                <Container>
                    <Row>
                        <Col sm={12} md={7} className="bg-color1">
                        </Col>
                        <Col sm={12} md={5} className="d-grid ">
                            <Form className='my-4'>
                                <h2 className='my-5'>
                                    Secure Your Account, Your Wallet,
                                    and Your Data With 6 Digits PIN
                                    That You Created Yourself.
                                </h2>
                                <p className='my-3'>
                                    Create 6 digits pin to secure all
                                    your money and your data in Zwallet
                                    app. Keep it secret and don’t tell
                                    anyone about your Zwallet account
                                    password and the PIN.
                                </p>
                                <div className=' d-flex justify-content-center'>
                                    <Pin />
                                </div>
                                <div className='d-grid gap-2'>
                                    <Button type="submit" className='py-3 my-5 rounded-btn2 bg-color1 text-light btn-color1' size="lg">
                                        Confirm
                                    </Button>
                                </div>
                            </Form>
                            <div className="d-flex justify-content-center my-5">
                            </div>
                        </Col>
                    </Row>
                </Container>
            </headers>

        </>
    )
}
export default pin