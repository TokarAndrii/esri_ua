import types from './types';

const GET_ALL_CAROUSEL_IMAGES = carouselImagesList => ({
  type: types.FETCH_SUCCESS_CAROUSEL_IMAGES_LIST,
  payload: carouselImagesList,
});

const FETCH_START_CAROUSEL_IMAGES_LIST = () => ({
  type: types.FETCH_START_CAROUSEL_IMAGES_LIST,
});

const FETCH_ERROR_CAROUSEL_IMAGES_LIST = () => ({
  type: types.FETCH_ERROR_CAROUSEL_IMAGES_LIST,
});

export default {
  GET_ALL_CAROUSEL_IMAGES,
  FETCH_START_CAROUSEL_IMAGES_LIST,
  FETCH_ERROR_CAROUSEL_IMAGES_LIST,
};
