import axios from 'axios';
import newsActions from './newsActions';

const fetchActualNews = () => dispatch => {
  dispatch(newsActions.FETCH_START);

  axios
    .get('http://192.168.0.53:9091/api/v1/news/all/')
    .then(resp =>
      dispatch(newsActions.FETCH_SUCCESS_ACTUAL_NEWS(resp.data.data)),
    )
    .catch(() => dispatch(newsActions.FETCH_ERROR_ACTUAL_NEWS()));
};

const fetchActualNewsById = id => dispatch => {
  dispatch(newsActions.FETCH_START);

  axios
    .get(`http://192.168.0.53:9091/api/v1/news/${id}`)
    .then(resp =>
      dispatch(
        newsActions.FETCH_SUCCESS_ACTUAL_NEWS_ITEM_BY_ID(resp.data.news),
      ),
    )
    .catch(() => dispatch(newsActions.FETCH_ERROR_ACTUAL_NEWS()));
};

const fetchNewsError = () => dispatch => {
  dispatch(newsActions.FETCH_ERROR_ACTUAL_NEWS());
};

export default { fetchActualNews, fetchActualNewsById, fetchNewsError };
