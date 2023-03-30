import React from 'react';
import './Header.css'
import logo from '../../images/logo1-removebg-preview.png'

const Header = () => {
    return (
        <nav className='header'>
            <img className='nav-logo' src={logo}></img>
            <div>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
        
    );
};

export default Header;