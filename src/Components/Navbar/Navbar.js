import React from "react";
import "./Navbar.scss";
import { Twirl as Hamburger } from 'hamburger-react'; 
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {

    const [isOpen, setOpen] = useState(false);

    const [link, setLink] = useState([
        // {to: '/', label: 'Home'},
        {to: '/explore', label: 'Explore Projects'},
    ]);

  return (
    <div className="navbar">
        <header className="header">
            <a href="/" className="header-link">
                <h1 className="navbar--logo">OpenExplorer</h1>
            </a>
        </header>

        
        <nav className="nav">
            <ul className="nav-links">
                {link.map((link, index) => (
                    (
                        <li key={index} className="links">
                            <Link className="li-link" to={link.to}>{link.label}</Link>
                        </li>
                    )
                ))}
            </ul>
        </nav> 
        
        <div className='mobile-hamburger'>
            <Hamburger size={20} toggled={isOpen} toggle={setOpen} onClick={() => setOpen(prev => !prev)}/>
        </div>

        {isOpen && (
            <div className='mobile-nav'>
                <ul>
                    {link.map((link, index) => (
                        (
                            <li key={index}>
                                <Link to={link.to}>{link.label}</Link>
                            </li>
                        )
                    ))}
                </ul>
            </div>
        )}
             
    </div>
  );
};

export default Navbar;