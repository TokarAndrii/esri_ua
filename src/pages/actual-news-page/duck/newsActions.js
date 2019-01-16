import newsTypes from './newsActionsTypes';

const FETCH_START = () => ({
  type: newsTypes.FETCH_START,
});

const FETCH_SUCCESS_ACTUAL_NEWS = newsList => ({
  type: newsTypes.FETCH_SUCCESS_ACTUAL_NEWS,
  payload: newsList,
});

export default {
  FETCH_START,
  FETCH_SUCCESS_ACTUAL_NEWS,
};
