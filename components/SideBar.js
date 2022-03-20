import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { IoGridOutline } from 'react-icons/io5'
import { VscArrowUp } from 'react-icons/vsc'
import { HiPlus } from 'react-icons/hi'
import { RiUser3Line } from 'react-icons/ri'
import { FiLogOut } from 'react-icons/fi'
import { Container } from 'react-bootstrap'

const SideBar = () => {
    const route = useRouter()
    const [active, setActive] = useState('/home')
    useEffect(() => {
        setActive(route.pathname)
    }, [route.pathname])
    const menu = [
        { link: '/home', name: 'Dashboard', icon: IoGridOutline },
        { link: '/transfer', name: 'Transfer', icon: VscArrowUp },
        { link: '/topup', name: 'Topup', icon: HiPlus },
        { link: '/profile', name: 'Profile', icon: RiUser3Line },
    ]
    return (
        <>
            <style jsx>
                {`
            .menu {
                background-color: white;
                border-radius: 25px;
                list-style-type: none;
            }
            .menu li {
                margin: 8px 0;
            }
            .menu li a{
                color: rgba(58, 61, 66, 0.8);
                padding-left: 10px;
                text-decoration: none;
                border-left: 3px solid transparent;
                font-size : 1.5rem;
            }
            .menu li a.active{
                color: #03045E;
                border-color: #03045E;
            }
        `}
            </style>
            <Container className='shadow rounded-btn2 vh-100'>
                <ul className="menu py-5">
                    {menu.map(item => {
                        const Icon = item.icon
                        return (
                            <li key={item.name} className="mb-5">
                                <Link href={item.link}>
                                    <a className={active === item.link ? 'active' : ''}>
                                        <Icon className='me-3' />
                                        {item.name}
                                    </a>
                                </Link>
                            </li>
                        )
                    })}
                    <li key="logout" className="mt-5 pt-5">
                        <Link href="/logout">
                            <a>
                                <FiLogOut className='me-3' />
                                Log Out
                            </a>
                        </Link>
                    </li>
                </ul>
            </Container>
        </>
    )
}

export default SideBar