import types from './types';
import newsActionsTypes from '../pages/actual-news-page/duck/newsActionsTypes';

const errorReducer = (state = '', { type }) => {
  switch (type) {
    case types.ERROR_WHILE_FETCHING_NAVLIST:
    case newsActionsTypes.FETCH_ERROR_ACTUAL_NEWS:
    case types.FETCH_ERROR_CAROUSEL_IMAGES_LIST:
      return 'Сталася помилка при завантаженні даних із серверу!';
    default:
      return state;
  }
};

export default errorReducer;
