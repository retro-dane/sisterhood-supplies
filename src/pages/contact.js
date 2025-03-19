import React from 'react';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import * as styles from './contact.module.css';

const ContactPage = () => (
  <div className={styles.container}>
    <Header />
    <div className={styles.content}>
      <h1>Contact Us</h1>
      <section className={styles.contactForm}>
        <p>We’d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.</p>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              rows="6"
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </section>
    </div>
    <Footer />
  </div>
);

export default ContactPage;