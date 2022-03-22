import Head from "next/head"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { FaEnvelope, FaLock } from "react-icons/fa"
import Button from "react-bootstrap/Button"
import Input from '../components/Input'
import { FiMail } from 'react-icons/fi'
import http from "../helpers/http"
import { useRouter } from "next/router"

const ForgotPassword = () => {
    const [requested, setRequested] = useState(false)
    const router = useRouter()
    const [otp, setOtp] = useState('')
    const [doneReset, setDoneReset] = useState(false)
    const [resetError, setResetError] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')

    useEffect(() => {
        setOtp(router.query.otp)
    }, [router.query])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setRequested(true)
        const data = new URLSearchParams()
        data.append('email', e.target.elements['email'].value)
        const request = await http().post('/auth/forgot-password?callback_url=http://localhost:3000', data, {
            validateStatus: (status) => {
                return status < 400
            }
        }).catch((error) => {
            console.log(error.response)
        })
    }

    const handleResetPassword = async (e) => {
        e.preventDefault()
        const data = new URLSearchParams()
        data.append('otp', otp)
        data.append('newPassword', e.target.elements['newPassword'].value)
        data.append('confirmPassword', e.target.elements['confirmPassword'].value)

        const request = await http().post('/auth/forgot-password', data, {
            validateStatus: (status) => {
                return status < 400
            }
        }).catch((error) => {
            setResetError(true)
            setErrorMsg(error.response.data.message)
        })
        if (request && request.status < 400) {
            setDoneReset(true)
        }

    }
    return (
        <>
            <Head>
                <title>Forgot Password</title>
            </Head>
            <Container fluid>
                <Row>
                    <Col lg={6} className='px-0 d-none d-lg-block'>

                    </Col>
                    <Col lg={6}>
                        {
                            !requested && !otp &&
                            <Container className="d-flex flex-column justify-content-center h-lg-100 vh-100">
                                <div>
                                    <h2>
                                        Did You Forgot Your Password?
                                        Don’t Worry, You Can Reset Your
                                        Password In a Minutes.
                                    </h2>
                                </div>
                                <div>
                                    <p>
                                        To reset your password, you must type your email and we will send a link to your email and you will be directed to the reset password screens.
                                    </p>
                                </div>
                                <form className="mb-4" onSubmit={handleSubmit}>
                                    <div>
                                        <div className="d-grid gap-2">
                                            <Input name="email" type="email" placeholder='Email ..' className='py-3 my-2 mx-5' icon={<FiMail />} />
                                        </div>
                                    </div>
                                    <Button type='submit' isBlock={true} variant='primary'>Confirm</Button>
                                </form>
                            </Container>
                        }
                        {
                            requested && !otp &&
                            <Container className="d-flex flex-column justify-content-center h-lg-100 vh-100">
                                <div>
                                    <h2>
                                        We have sent a mail to your email! Please check it to continue reset your password
                                    </h2>
                                </div>
                                <Link href='/login' passHref>
                                    <Button isBlock={true}>Go to Login</Button>
                                </Link>
                            </Container>
                        }
                        {
                            otp && !doneReset &&
                            <Container className="d-flex flex-column justify-content-center h-lg-100 vh-100">
                                <div>
                                    <h2>
                                        Did You Forgot Your Password?
                                        Don’t Worry, You Can Reset Your
                                        Password In a Minutes.
                                    </h2>
                                </div>
                                <div>
                                    <p>
                                        Now you can create a new password for your Zwallet account. Type your password twice so we can confirm your new passsword.
                                    </p>
                                </div>
                                <form className="mb-4" onSubmit={handleResetPassword}>
                                    <div>
                                        <Input name="newPassword" type='password' placeholder='New Password ..' className='py-3 mx-4' icon={<FaLock color='rgba(169, 169, 169, 0.6)' />} />
                                        <Input name="confirmPassword" type='password' placeholder='Confirm Password ..' className='py-3 mx-4' icon={<FaLock color='rgba(169, 169, 169, 0.6)' />} />
                                    </div>
                                    {
                                        resetError &&
                                        <div className="text-center mb-3">
                                            <h3 className="error-message">{errorMsg}</h3>
                                        </div>
                                    }
                                    <Button type='submit' isBlock={true} variant='primary'>Confirm</Button>
                                </form>
                            </Container>
                        }
                        {
                            otp && doneReset &&
                            <Container className="d-flex flex-column justify-content-center h-lg-100 vh-100">
                                <div className="mb-5">
                                    <h2>
                                        Your password has been resetted!
                                    </h2>
                                </div>
                                <Link href='/login' passHref>
                                    <Button isBlock={true} variant='primary'>Go to Login</Button>
                                </Link>
                            </Container>
                        }
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ForgotPassword