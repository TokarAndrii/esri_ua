import newsTypes from './newsActionsTypes';

const isloadingReducer = (state = false, { type }) => {
  switch (type) {
    case newsTypes.FETCH_START:
      return true;
    case newsTypes.FETCH_SUCCESS_ACTUAL_NEWS:
      return false;
    default:
      return state;
  }
};

export default isloadingReducer;
