import React from 'react';
import logo from '../../images/black-logo.png';
import './Navbar.css';
import {Link} from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="Bootstrap" width="75" height="40" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link name-menu" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Menu
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link to='/' className="dropdown-item">Home</Link></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><Link to='/shop' className="dropdown-item">Shop</Link></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><Link to='/cart' className="dropdown-item">Cart</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar