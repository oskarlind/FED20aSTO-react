import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return <header>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/order">Order form</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </header>
}

export default Header;