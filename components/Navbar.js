import React from 'react'
import Image from "next/image"
import { Navbar, Container } from "react-bootstrap"
import photo from "../images/navimg.png"
import { BsBell } from "react-icons/bs"
import Link from 'next/link'
import { useSelector } from 'react-redux'

const Navbars = () => {
    const auth = useSelector(state => state.auth?.userData)
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
                                src={auth?.picture || photo}
                                width="60"
                                height="60"
                                className="align-top rounded-btn"
                            />
                        </Navbar.Brand>
                        <Navbar.Text className='d-flex flex-column'>
                            <p className=' text-decoration-none mt-2'>{auth?.fullName}</p>
                            <p className=' text-decoration-none'>+62 8139 3877 7946</p>
                        </Navbar.Text>
                        <Navbar.Text className='d-flex flex-column ms-5'>
                            <BsBell size={25} color={"white"} />
                        </Navbar.Text>
                    </Container>
                </Navbar>
            </></>
    )
}
export default Navbars