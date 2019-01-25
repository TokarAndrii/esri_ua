import React from 'react';
import Loader from 'react-loader-spinner';
import NewsItem from '../../components/news-item/NewsItem';
import styles from './ActualNewsPage.module.css';

const ActualNewsPage = ({ isLoading, actualNews }) =>
  console.log(actualNews, ' actualNews') || (
    <div className={styles.holder}>
      {isLoading && (
        <Loader type="Bars" color="rgba(0, 0, 0, 0.7)" height="80" width="80" />
      )}
      <div className={styles.content}>
        {actualNews.map(current => {
          const { newsImages, preview, id, title } = current;
          return (
            <NewsItem
              key={id}
              images={newsImages}
              preview={preview}
              title={title}
              idNewsItem={id}
            />
          );
        })}
      </div>
    </div>
  );

export default ActualNewsPage;
