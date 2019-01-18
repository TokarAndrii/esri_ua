import React from 'react';
import styles from './NewsItem.module.css';

const NewsItem = ({ images = [], title, content }) => (
  <div className={styles.contentHolder}>
    <li key={title} className={styles.newsBlock}>
      <h3 className={styles.newsItemTitle}>
        {title}
        <div className={styles.separator} />
      </h3>

      {images.map(current => {
        const { base64Image, idOfNews, imageFormat, id } = current;
        return (
          <div key={id}>
            <img
              key={idOfNews}
              className={styles.image}
              src={`data:image/${imageFormat};base64,${base64Image}`}
              alt={`image_news_${idOfNews}`}
            />
          </div>
        );
      })}

      <p className={styles.content}>{content}</p>
      <hr className={styles.style6} />
    </li>
  </div>
);

export default NewsItem;
