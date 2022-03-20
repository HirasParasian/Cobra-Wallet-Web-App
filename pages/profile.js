import React, { useEffect, useRef, useState } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import SideBar from '../components/SideBar'
import Navbar from '../components/Navbar'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'
import { GrLinkNext } from 'react-icons/gr'
import { FiEdit2, FiSave } from 'react-icons/fi'
import { getProfile, editProfile } from '../redux/actions/auth'
import { useSelector, useDispatch } from 'react-redux'
import ModalSuccess from '../components/ModalSuccess'
import ModalLoading from '../components/ModalLoading'



const Profile = () => {
    const auth = useSelector(state => state.auth?.userData)
    const hiddenFileInput = useRef(null)
    const tokens = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [datas, setDatas] = useState({})

    useEffect(() => {
        if (!auth.token) {
            const token = window.localStorage.getItem('token')
            if (token) {
                dispatch(getProfile(token))
                dispatch({ type: 'CLEAR_MESSAGE' });
            } else {
                window.alert('Please login first')
                navigate('/login')
            }
        }
    }, [])
    const fileInputHandler = (e) => {
        const reader = new FileReader();
        const picture = e.target.files[0];
        const profileImage = document.querySelector('#profile-image');
        reader.readAsDataURL(picture);
        reader.onload = (e) => {
            profileImage.src = e.target.result;
            profileImage.className += ' rounded-circle'
        };
        setDatas({
            picture: e.target.files[0]
        });
    };
    // console.log(datas.picture)
    const uploadFile = (e) => {
        e.preventDefault()
        hiddenFileInput.current.click()
    }
    const onEditProfile = (e) => {
        e.preventDefault()
        dispatch({ type: "CLEAR_MESSAGE" })
        const picture = datas.picture
        // console.log(picture)
        const token = window.localStorage.getItem('token')
        dispatch(editProfile(token, picture))
        window.scrollTo(0, 0)
    }
    return (
        <>
            <Navbar />
            <ModalSuccess message={tokens.successMsg} />
            <ModalLoading isLoading={tokens.isLoading == true} />
            <Container className='my-5'>
                <Row>
                    <Col xs={12} md={3}>
                        <SideBar />
                    </Col>
                    <Col>
                        <Row>
                            <Col xs={12}>
                                <Container className='shadow rounded-btn2 vh-100'>
                                    <Row>
                                        <Col xs={3}>
                                        </Col>
                                        <Col xs={12} md={6} >
                                            <div className=' my-3'>
                                                <Image
                                                    id="profile-image"
                                                    alt={auth?.fullName}
                                                    src={auth?.picture}
                                                    width="80"
                                                    height="80"
                                                    className="rounded mx-auto d-block"
                                                // fluid
                                                // thumbnail
                                                />
                                                <div className='d-flex justify-content-center'>
                                                    <Button block variant='pallet-2 radius' onClick={(e) => uploadFile(e)}> <FiEdit2 /> Edit </Button>
                                                    <input type="file"
                                                        ref={hiddenFileInput}
                                                        className='d-none'
                                                        name='picture'
                                                        accept='image'
                                                        onChange={(e) => fileInputHandler(e)}
                                                    />
                                                    <Button onClick={onEditProfile} block variant='pallet-2 radius'> <FiSave /> Save </Button>
                                                </div>
                                                <h4 className="text-center">{auth?.fullName}</h4>
                                                <div className="text-center">{"081388981122"}</div>
                                            </div>
                                            <div className="d-grid gap-2">
                                                <Link href={'/profile/personal-information'} passHref>
                                                    <Button style={{ alignItems: "center" }} type="submit" variant="color6" className='btn mx-5 py-3 my-2 rounded-btn2 bg-color6 border-0 text-dark btn-secondary d-flex justify-content-between' size="lg">
                                                        <h5>Personal Information</h5> <GrLinkNext />
                                                    </Button>
                                                </Link>
                                            </div>
                                            <div className="d-grid gap-2">
                                                <Link href={'/profile/change-password'} passHref>
                                                    <Button style={{ alignItems: "center" }} type="submit" variant="color6" className='btn mx-5 py-3 my-2 rounded-btn2 bg-color6 border-0 text-dark btn-secondary d-flex justify-content-between' size="lg">
                                                        <h5>Change Password</h5> <GrLinkNext />
                                                    </Button>
                                                </Link>
                                            </div>
                                            <div className="d-grid gap-2">
                                                <Link href={'/profile/change-pin'} passHref>
                                                    <Button style={{ alignItems: "center" }} type="submit" variant="color6" className='btn mx-5 py-3 my-2 rounded-btn2 bg-color6 border-0 text-dark btn-secondary d-flex justify-content-between' size="lg">
                                                        <h5>Change PIN</h5> <GrLinkNext />
                                                    </Button>
                                                </Link>
                                            </div>
                                            <div className="d-grid gap-2">
                                                <Link href={'/logout'} passHref>
                                                    <Button style={{ alignItems: "center" }} type="submit" variant="color6" className='btn mx-5 py-3 my-2 rounded-btn2 bg-color6 border-0 text-dark btn-secondary d-flex justify-content-between' size="lg">
                                                        <h5>Logout</h5> <GrLinkNext />
                                                    </Button>
                                                </Link>
                                            </div>
                                        </Col>
                                        <Col xs={3}>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row >
                    </Col >
                </Row >
            </Container >
        </>
    )
}
export default Profile