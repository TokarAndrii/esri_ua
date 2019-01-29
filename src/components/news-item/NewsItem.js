import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NewsItem.module.css';

const NewsItem = ({ images = [], title, preview, idNewsItem }) => (
  <div className={styles.contentHolder}>
    <Link
      to={`/actual-news/${idNewsItem}`}
      className={styles.linkToNewsItemPageItem}
    >
      <li key={title} className={styles.newsBlock}>
        <h3 className={styles.newsItemTitle}>
          {title}
          <div className={styles.separator} />
        </h3>

        {images !== undefined &&
          images.map(current => {
            const { imageUrl, idOfNews, id, headerImage } = current;
            return (
              headerImage && (
                <div key={id} className={styles.imageHolder}>
                  <img
                    key={idOfNews}
                    className={styles.image}
                    src={imageUrl}
                    alt={`image_news_${idOfNews}`}
                  />
                </div>
              )
            );
          })}

        <p className={styles.content}>{preview}</p>
        <hr className={styles.style6} />
      </li>
    </Link>
  </div>
);

export default NewsItem;
