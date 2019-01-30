import React, { Component } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import Carousel from '../../components/carousel/CarouselComponent';
import NewsItem from '../../components/news-item/NewsItem';
import newsOperations from '../actual-news-page/duck/newsOperations';
import carouselOperations from '../../redux/carouselImagesOperations';
import apiConfig from '../../config';
import styles from './HomePage.module.css';

const INITIAL_STATE = {
  title: '',
  preview: '',
  images: [],
  idNewsItem: '',
  isLoading: 'false',
};

const { protocol, port, ip, rootUrl } = apiConfig;

class HomePage extends Component {
  state = { ...INITIAL_STATE };

  componentDidMount() {
    this.setState({ isLoading: true });
    const { setErrorNewsfetching, fetchAllCarouselImages } = this.props;
    fetchAllCarouselImages();
    axios
      .get(`${protocol}://${ip}:${port}/${rootUrl}/news/all/?limit=1`)
      .then(resp => {
        const { id, title, newsImages, preview } = resp.data.data[0];
        return this.setState({
          isLoading: false,
          preview,
          title,
          images: newsImages,
          idNewsItem: id,
        });
      })
      .catch(() => {
        setErrorNewsfetching();
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { title, preview, idNewsItem, images, isLoading } = this.state;
    const { isError, carouselImages } = this.props;
    return (
      <div className={styles.holder}>
        <h1>Home Page esri ua</h1>
        <div className={styles.content}>
          <Carousel classname={styles.carousel} images={carouselImages} />
          {isLoading && !isError && (
            <Loader
              type="Bars"
              color="rgba(0, 0, 0, 0.7)"
              height="80"
              width="80"
            />
          )}

          {isError !== '' ? (
            <div className={styles.error}>{isError}</div>
          ) : (
            <NewsItem
              images={images}
              title={title}
              preview={preview}
              idNewsItem={idNewsItem}
            />
          )}
        </div>
      </div>
    );
  }
}
const mdtp = {
  setErrorNewsfetching: newsOperations.fetchNewsError,
  fetchAllCarouselImages: carouselOperations.fetchAllCarouselImages,
};

const mstp = state => ({
  isError: state.isError,
  carouselImages: state.carouselImages,
});

export default connect(
  mstp,
  mdtp,
)(HomePage);
