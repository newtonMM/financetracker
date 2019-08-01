import React from 'react';

function Header(){
    return(
        
     <nav className="topnav">
    <a className="home" href="#home">Home</a>
    <a  className="account"href="#account">Account</a>
    <a className="contact" href="#contact">Contact</a>
    <a  className="about"href="#about">About</a>
    </nav>
        
    );
}
export default Header