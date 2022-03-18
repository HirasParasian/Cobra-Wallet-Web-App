import React from 'react'
import Image from "next/image"
import { Navbar, Container } from "react-bootstrap"
import photo from "../images/navimg.png"
import { BsBell } from "react-icons/bs"

const test = () => {
    return (
        <>
            <>
                <Navbar bg="color1" variant="dark">
                    <Container>
                        <Navbar.Text className='d-flex flex-column ms-5'>
                            <h4 className='text-light'>Zwallet</h4>
                        </Navbar.Text>
                        <Navbar.Brand href="/profile" className='d-flex text-align-center ms-auto'>
                            <Image
                                alt=""
                                src={photo}
                                width="40"
                                height="40"
                                className="align-top"
                            />
                        </Navbar.Brand>
                        <Navbar.Text className='d-flex flex-column'>
                            <a href="/profile" className=' text-decoration-none'>Robert Chandler</a>
                            <a href="/profile" className=' text-decoration-none'>+62 8139 3877 7946</a>
                        </Navbar.Text>
                        <Navbar.Text className='d-flex flex-column ms-5'>
                            <BsBell size={25} color={"white"} />
                        </Navbar.Text>
                    </Container>
                </Navbar>
            </></>
    )
}
export default test