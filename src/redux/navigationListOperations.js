import axios from 'axios';
import navigationListActions from './navigationListActions';

const fetchAllNavigationsList = () => dispatch => {
  dispatch(navigationListActions.FETCH_START_GET_NAVIGATION_LIST());

  axios
    .get('http://192.168.0.53:9091/api/v1/headers/main_headers/all')
    .then(resp =>
      dispatch(navigationListActions.GET_ALL_NAVLIST(resp.data.data)),
    )
    .catch(err => {
      console.log(err, ' - err at fetchAllNavigationsList');
      // dispatch(carouselImagesActions.FETCH_ERROR_CAROUSEL_IMAGES_LIST());
    });
};

export default { fetchAllNavigationsList };
