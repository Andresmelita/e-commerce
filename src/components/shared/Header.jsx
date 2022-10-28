import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './styles/header.css'

const Header = () => {
    return (
        <header className='header'>
            <div className='title'>
                <h1 className='header_title'>
                    <Link to='/' className='ecommerce'>e-commerce</Link>
                </h1>
            </div>
            <div className='content'></div>
            <nav className='header_nav'>
                <ul className='header_list'>
                    <li className='header_item'>
                        <NavLink className='header_link' to='/login'>
                            Login
                        </NavLink>
                    </li>
                    <li className='header_item'>
                        <NavLink className='header_link' to='/purchases'>
                            Purchase
                        </NavLink>
                    </li>
                    <li className='header_item'>
                        <NavLink className='header_link' to='/cart'>
                            Cart
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header