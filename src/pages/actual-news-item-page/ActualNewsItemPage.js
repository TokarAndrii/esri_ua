import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import axios from 'axios';
import { Link } from 'react-router-dom';
import news from './news.png';
import styles from './ActualNewsItemPage.module.css';
import apiConfig from '../../config';

const INITIAL_STATE = {
  content: '',
  title: '',
  newsImages: [],
  isLoading: false,
};

const { protocol, port, ip, rootUrl } = apiConfig;

class ActualNewsItemPage extends Component {
  state = { ...INITIAL_STATE };

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    axios.get(`${protocol}://${ip}:${port}/${rootUrl}/news/${id}`).then(resp =>
      this.setState({
        content: resp.data.news.content,
        newsImages: resp.data.news.newsImages,
        title: resp.data.news.title,
      }),
    );
  }

  render() {
    const { content, newsImages, title, isLoading } = this.state;

    console.log(newsImages, ' newsImages');

    return (
      <>
        <Link to="/actual-news" className={styles.addNewsPageLinkHolder}>
          <img
            className={styles.addNewsPageLinkIcon}
            src={news}
            alt="home_icon"
          />
          <span className={styles.addNewstext}>До новин</span>
        </Link>
        {isLoading && (
          <Loader type="Puff" color="#00BFFF" height="100" width="100" />
        )}

        <div className={styles.holder}>
          <div className={styles.content}>
            <h3 className={styles.newsItemTitle}>
              {title}
              <div className={styles.separator} />
            </h3>
            <div>
              {newsImages !== undefined &&
                newsImages.map(image => (
                  <img
                    key={image.id}
                    className={styles.image}
                    src={image.imageUrl}
                    alt={`image_news_${image.id}`}
                  />
                ))}
            </div>
            <p className={styles.textPage}>{content}</p>
          </div>
        </div>
      </>
    );
  }
}

export default ActualNewsItemPage;
