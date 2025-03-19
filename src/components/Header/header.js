import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import * as styles from './header.module.css';
import logo from '../../images/sisterhood-supplies-logo.jpeg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img src={logo} alt="Sisterhood Supplies Logo" className={styles.logo} />
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link to="/about" className={styles.navLink}>About</Link>
        <Link to="/services" className={styles.navLink}>Services</Link>
        <Link to="/contact" className={styles.navLink}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;