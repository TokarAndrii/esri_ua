import React from 'react';
import Carousel from '../../components/carousel/CarouselComponent';
import styles from './HomePage.module.css';

const HomePage = () => (
  <div className={styles.holder}>
    <h1>Home Page esri ua</h1>
    <div className={styles.content}>
      <Carousel
        classname={styles.carousel}
        img1="https://placeimg.com/1950/680/tech"
        img2="https://placeimg.com/1950/680/people"
        img3="https://placeimg.com/1950/680/arch"
        img4="https://placeimg.com/1950/680/arch/sepia"
      />
      <p>
        Perspiciatis possimus, ratione doloribus fuga est autem eveniet
        reprehenderit iste quaerat dolor aperiam error fugiat vel at temporibus
        itaque, quos, amet accusantium architecto! Laboriosam modi debitis
        possimus consectetur necessitatibus soluta quibusdam? Quae illo
        asperiores quisquam, explicabo cum quaerat eaque tempore praesentium.
        Alias deleniti voluptatibus sed cumque!
      </p>
      <img src="https://via.placeholder.com/800x360" alt="mainPageBanner" />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        animi ducimus rerum explicabo facere quae. Aliquid voluptatum,
        consequuntur maiores tenetur dolorum nihil magni voluptates recusandae
        perferendis ut reprehenderit vel ipsa. Quibusdam minima ipsa recusandae
        in eum mollitia suscipit quam, unde itaque et voluptatum nisi
        repellendus impedit rerum iusto veritatis animi fuga, aliquid tempore
        qui. Perspiciatis possimus, ratione doloribus fuga est autem eveniet
        reprehenderit iste quaerat dolor aperiam error fugiat vel at temporibus
        itaque, quos, amet accusantium architecto! Laboriosam modi debitis
        possimus consectetur necessitatibus soluta quibusdam? Quae illo
        asperiores quisquam, explicabo cum quaerat eaque tempore praesentium.
        Alias deleniti voluptatibus sed cumque!
      </p>
    </div>
  </div>
);

export default HomePage;
