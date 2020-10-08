import React from 'react';
import styles from './index.module.css'
import InstagramPost from '../InstagramPost'

const Footer = () => {
    return <footer>
        <h2 className={styles.h2}>Some footer information</h2>
        <InstagramPost url="https://www.instagram.com/p/CF1pH3vFWUr/"/>
        <p>Hello from Footer component</p>
        </footer>
}

export default Footer;