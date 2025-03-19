
import React from 'react';
import { Link } from 'gatsby';
import * as styles from '../styles/404.module.css'; // Optional: Add custom styles

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Page Not Found</h1>
      <p className={styles.message}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" className={styles.homeLink}>
        Go back to the homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;