import newsTypes from './newsActionsTypes';
import types from '../../../redux/types';

const isloadingReducer = (state = false, { type }) => {
  switch (type) {
    case newsTypes.FETCH_START:
    case types.FETCH_START_CAROUSEL_IMAGES_LIST:
    case types.FETCH_START_GET_NAVIGATION_LIST:
      return true;
    case newsTypes.FETCH_SUCCESS_ACTUAL_NEWS:
    case types.FETCH_SUCCESS_CAROUSEL_IMAGES_LIST:
    case newsTypes.FETCH_ERROR_ACTUAL_NEWS:
    case types.FETCH_ERROR_CAROUSEL_IMAGES_LIST:
    case types.GET_ALL_NAVLIST:
      return false;
    default:
      return state;
  }
};

export default isloadingReducer;
