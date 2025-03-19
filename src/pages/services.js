import React from 'react';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import * as styles from './services.module.css';
import { FaCut, FaBrush, FaMagic } from 'react-icons/fa'; // Import icons
import placeholder3 from '../images/placeholder2.jpg';

const ServicesPage = () => (
  <div className={styles.container}>
    <Header />
    <div className={styles.content}>
      <h1>Our Services</h1>
      <section className={styles.services}>
        <h2>Hair Care Services</h2>
        <p>We offer a range of hair care services tailored to the needs of underprivileged girls.</p>
        <img src={placeholder3} alt="Services Placeholder" className={styles.servicesImage} />
        <ul className={styles.serviceList}>
          <li>
            <FaCut className={styles.icon} /> Haircuts
          </li>
          <li>
            <FaBrush className={styles.icon} /> Hair Styling
          </li>
          <li>
            <FaMagic className={styles.icon} /> Hair Treatments
          </li>
        </ul>
      </section>
    </div>
    <Footer />
  </div>
);

export default ServicesPage;