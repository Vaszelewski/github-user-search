import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Navbar = () => (
    <nav className="row bg-primary main-navbar">
        <div className="col-4">
            <Link to="/" className=" navbar-logo-text">
                <h4>Bootcamp DevSuperior</h4>
            </Link>
        </div>
    </nav>
);

export default Navbar;