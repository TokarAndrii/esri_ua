import newsTypes from './newsActionsTypes';

const FETCH_START = () => ({
  type: newsTypes.FETCH_START,
});

const FETCH_SUCCESS_ACTUAL_NEWS = newsList => ({
  type: newsTypes.FETCH_SUCCESS_ACTUAL_NEWS,
  payload: newsList,
});

const FETCH_SUCCESS_ACTUAL_NEWS_ITEM_BY_ID = newsItem => ({
  type: newsTypes.FETCH_SUCCESS_ACTUAL_NEWS,
  payload: [...newsItem],
});

export default {
  FETCH_START,
  FETCH_SUCCESS_ACTUAL_NEWS,
  FETCH_SUCCESS_ACTUAL_NEWS_ITEM_BY_ID,
};
