import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Navbar = () => (
    <nav className="row main-navbar">
        <div>
            <Link to="/" className="navbar-logo-text">
                Bootcamp DevSuperior
            </Link>
        </div>
    </nav>
);

export default Navbar;