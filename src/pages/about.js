// about.js
import React from 'react';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import * as styles from './about.module.css';
import placeholder2 from '../images/placeholder2.jpg';

const AboutPage = () => (
  <div>
    <Header />
    <main className={styles.main}>
      <h1>About Us</h1>
      <section className={styles.team}>
        <h2>Our Team</h2>
        <p>Our team consists of passionate individuals who are committed to making a difference in the lives of these girls.</p>
        <img src={placeholder2} alt="Team Placeholder" className={styles.teamImage} />
      </section>
    </main>
    <Footer />
  </div>
);

export default AboutPage;