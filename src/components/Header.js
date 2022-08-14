import React from 'react';
import {Link} from 'react-router-dom';
import logo from  '../img/Logo.png';

const Header = () => {
    return ( 
        <header>
            <div className="logo-container">
            <Link to={'/'}>
                <img src={logo} alt="Logo Ricky and Morty" />
            </Link>
            </div>

            <nav>
                <ul className="nav-links">
                    <Link to={'/'} className="nav-link">Inicio</Link>
                    <Link to={'/episodios'} className="nav-link">Episodios</Link>
                    <Link to={'/doc'} className="nav-link">Nosotros</Link>
                </ul>
            </nav>
        </header>
    );
}

export default Header;