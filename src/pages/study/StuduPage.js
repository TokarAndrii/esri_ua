import React from 'react';
import styles from './StudyPage.module.css';

const StudyPage = () => (
  <div className={styles.holder}>
    <div className={styles.content}>
      <div className={styles.pageMainImageHolder}>
        <h2 сlassName={styles.pageTitle}>Навчання</h2>
        <div className={styles.separator} />
        <img
          alt="logo"
          src="https://via.placeholder.com/1100x350"
          className={styles.pageMainImage}
        />
      </div>
      <p>Навчання</p>
    </div>
  </div>
);

export default StudyPage;
