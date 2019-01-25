import React, { Component } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import Carousel from '../../components/carousel/CarouselComponent';
import NewsItem from '../../components/news-item/NewsItem';
import styles from './HomePage.module.css';

const INITIAL_STATE = {
  title: '',
  preview: '',
  images: [],
  idNewsItem: '',
  isLoading: '',
};

class HomePage extends Component {
  state = { ...INITIAL_STATE };

  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get('http://192.168.0.53:9091/api/v1/news/all/?limit=1')
      .then(resp => {
        console.log(resp.data.data[0]);
        const { id, title, newsImages, preview } = resp.data.data[0];
        return this.setState({
          isLoading: false,
          preview,
          title,
          images: newsImages,
          idNewsItem: id,
        });
      });
  }

  render() {
    const { title, preview, idNewsItem, images, isLoading } = this.state;
    return (
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
          {isLoading && (
            <Loader
              type="Bars"
              color="rgba(0, 0, 0, 0.7)"
              height="80"
              width="80"
            />
          )}
          <NewsItem
            images={images}
            title={title}
            preview={preview}
            idNewsItem={idNewsItem}
          />
        </div>
      </div>
    );
  }
}

export default HomePage;
