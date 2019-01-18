import React from 'react';
import Loader from 'react-loader-spinner';
import NewsItem from '../../components/news-item/NewsItem';
import styles from './ActualNewsPage.module.css';

const ActualNewsPage = ({ isLoading, actualNews }) => (
  <div className={styles.holder}>
    {isLoading && (
      <Loader type="Bars" color="rgba(0, 0, 0, 0.7)" height="80" width="80" />
    )}
    <div className={styles.content}>
      {actualNews.map(current => {
        const { newsImages, content, id, title } = current;
        return (
          <NewsItem
            key={id}
            images={newsImages}
            content={content}
            title={title}
          />
        );
      })}
    </div>
  </div>
);

export default ActualNewsPage;
