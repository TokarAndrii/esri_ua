import types from './types';

const carouselImagesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.FETCH_SUCCESS_CAROUSEL_IMAGES_LIST:
      return payload;
    default:
      return state;
  }
};

export default carouselImagesReducer;
