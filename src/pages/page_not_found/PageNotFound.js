import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PageNotFound.module.css';

const PageNotFound = () => (
  <div className={styles.pageNotFound}>
    <img src="./images/error.svg" alt="error" className={styles.image} />
    <div>
      <p className={styles.message}>404 Вибачте, такої сторінки не знайдено!</p>
      <Link className={styles.link} to="/">
        Перейти на головну
        <span className={styles.line} />
      </Link>
    </div>
  </div>
);

export default PageNotFound;
