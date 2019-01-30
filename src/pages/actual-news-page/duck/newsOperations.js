import axios from 'axios';
import newsActions from './newsActions';
import apiConfig from '../../../config';

const { protocol, port, ip, rootUrl } = apiConfig;

const fetchActualNews = () => dispatch => {
  dispatch(newsActions.FETCH_START);

  axios
    .get(`${protocol}://${ip}:${port}/${rootUrl}/news/all/`)
    .then(resp =>
      dispatch(newsActions.FETCH_SUCCESS_ACTUAL_NEWS(resp.data.data)),
    )
    .catch(() => dispatch(newsActions.FETCH_ERROR_ACTUAL_NEWS()));
};

const fetchActualNewsById = id => dispatch => {
  dispatch(newsActions.FETCH_START);

  axios
    .get(`${protocol}://${ip}:${port}/${rootUrl}/news/${id}`)
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
