import newsTypes from './newsActionsTypes';

const isloadingReducer = (state = [], { type, payload }) => {
  switch (type) {
    case newsTypes.FETCH_SUCCESS_ACTUAL_NEWS:
      return payload;
    default:
      return state;
  }
};

export default isloadingReducer;
