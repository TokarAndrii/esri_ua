import axios from 'axios';
import newsActions from './newsActions';

const fetchActualNews = () => dispatch => {
  dispatch(newsActions.FETCH_START);

  axios
    .get('http://192.168.0.53:9091/api/v1/news/all/')
    .then(resp =>
      dispatch(newsActions.FETCH_SUCCESS_ACTUAL_NEWS(resp.data.data)),
    );
};

const fetchActualNewsById = id => dispatch => {
  dispatch(newsActions.FETCH_START);

  axios
    .get(`http://192.168.0.53:9091/api/v1/news/${id}`)
    .then(resp =>
      dispatch(
        newsActions.FETCH_SUCCESS_ACTUAL_NEWS_ITEM_BY_ID(resp.data.news),
      ),
    );
};

export default { fetchActualNews, fetchActualNewsById };
