import axios from 'axios';
import carouselImagesActions from './carouselImagesListActions';

const fetchAllCarouselImages = () => dispatch => {
  dispatch(carouselImagesActions.FETCH_START_CAROUSEL_IMAGES_LIST());

  axios
    .get('http://192.168.0.53:9091/api/v1/headers_images/all')
    .then(resp =>
      dispatch(carouselImagesActions.GET_ALL_CAROUSEL_IMAGES(resp.data)),
    )
    .catch(err => {
      console.log(err, ' - err at fetchAllCarouselImages');
      dispatch(carouselImagesActions.FETCH_ERROR_CAROUSEL_IMAGES_LIST());
    });
};

export default { fetchAllCarouselImages };
