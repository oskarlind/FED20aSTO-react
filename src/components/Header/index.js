import React from 'react';
import {Link} from 'react-router-dom';
import styles from './index.module.css'

const Header = () => {
    return <header>
        <h2 className={styles.h2}>Welcome to the recipe website</h2>
        <p>The best recipes - all in one place!</p>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/order">Order form</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </header>
}

export default Header;