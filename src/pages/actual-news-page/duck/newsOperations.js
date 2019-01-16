import axios from 'axios';
import newsActions from './newsActions';

const fetchActualNews = () => dispatch => {
  dispatch(newsActions.FETCH_START);

  axios.get('http://localhost:9091/api/v1/news/all/').then(resp => {
    dispatch(newsActions.FETCH_SUCCESS_ACTUAL_NEWS(resp.data.listOfItems));
  });
};

export default { fetchActualNews };
