import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../customLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div className='navbar'>
            <CustomLink  className='navlink' to={'/home'}>Home</CustomLink>
            <CustomLink  className='navlink' to={'/reviews'}>Reviews</CustomLink>
            <CustomLink  className='navlink' to={'/dashbord'}>Dashbord</CustomLink>
            <CustomLink  className='navlink' to={'/blogs'}>Blogs</CustomLink>
            <CustomLink  className='navlink' to={'/about'}>About</CustomLink>
            {/* <Link className='navlink' to={'/home'}>Home</Link>
            <Link className='navlink' to={'/reviews'}>Reviews</Link>
            <Link className='navlink' to={'/dashbord'}>Dashbord</Link>
            <Link className='navlink' to={'/blogs'}>Blogs</Link>
            <Link className='navlink' to={'/about'}>About</Link> */}
        </div>
    );
};

export default Header;