import React from 'react';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import * as styles from './index.module.css';
import haircare from '../images/black-girl-hair-care.jpg';
import { Link } from 'gatsby';

const IndexPage = () => (
  <div className={styles.container}>
    <Header />
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Welcome to Sisterhood Supplies</h1>
          <p>Providing hair care services for underprivileged girls.</p>
          <Link to="/contact" className={styles.ctaButton}>
            Get in Touch
          </Link>
        </div>
        <img src={haircare} height={400} alt="Placeholder" className={styles.heroImage} />
      </section>
      <section className={styles.mission}>
        <h2>Our Mission</h2>
        <p>We are dedicated to empowering underprivileged girls through hair care services, helping them feel confident and beautiful.</p>
      </section>
      <section className={styles.servicesPreview}>
        <h2>Our Services</h2>
        <div className={styles.serviceCards}>
          <div className={styles.serviceCard}>
            <h3>Haircuts</h3>
            <p>Professional haircuts tailored to each girl’s needs.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Hair Styling</h3>
            <p>Creative and trendy hairstyles for all occasions.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Hair Treatments</h3>
            <p>Nourishing treatments to keep hair healthy and strong.</p>
          </div>
        </div>
      </section>
      <section className={styles.testimonials}>
        <h2>What People Are Saying</h2>
        <div className={styles.testimonialCards}>
          <div className={styles.testimonialCard}>
            <p>"Sisterhood Supplies has made a huge difference in our community. The girls feel so confident and beautiful!"</p>
            <p className={styles.author}>— Jane Doe</p>
          </div>
          <div className={styles.testimonialCard}>
            <p>"The team is amazing and truly cares about the girls they serve. Highly recommend!"</p>
            <p className={styles.author}>— John Smith</p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default IndexPage;