// Footer.js
import React from 'react';
import * as styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <p>&copy; {new Date().getFullYear()} Sisterhood Supplies. All rights reserved.</p>
  </footer>
);

export default Footer;