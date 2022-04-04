import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='navbar'>
            <Link className='navlink' to={'/home'}>Home</Link>
            <Link className='navlink' to={'/reviews'}>Reviews</Link>
            <Link className='navlink' to={'/dashbord'}>Dashbord</Link>
            <Link className='navlink' to={'/blogs'}>Blogs</Link>
            <Link className='navlink' to={'/about'}>About</Link>
        </div>
    );
};

export default Header;