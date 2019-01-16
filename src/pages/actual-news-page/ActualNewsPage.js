import React from 'react';
import Loader from 'react-loader-spinner';
import styles from './ActualNewsPage.module.css';

const ActualNewsPage = ({ isLoading, actualNews }) =>
  console.log(actualNews) || (
    <div className={styles.holder}>
      {isLoading && (
        <Loader type="Bars" color="rgba(0, 0, 0, 0.7)" height="80" width="80" />
      )}
      <div className={styles.content}>ActualNewsPage</div>
    </div>
  );

export default ActualNewsPage;
