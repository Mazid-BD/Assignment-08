import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='header w-11/12 mx-auto'>
            <div>
                <h2>Programming Career</h2>
            </div>
            <div>
                <a href="home">Home</a>
                <a href="about">About</a>
                <a href="blog">Blog</a>
                
            </div>
        </nav>
    );
};

export default Header;