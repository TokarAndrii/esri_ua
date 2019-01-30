import axios from 'axios';
import navigationListActions from './navigationListActions';
import apiConfig from '../config';

const { protocol, port, ip, rootUrl } = apiConfig;

const fetchAllNavigationsList = () => dispatch => {
  dispatch(navigationListActions.FETCH_START_GET_NAVIGATION_LIST());

  axios
    .get(`${protocol}://${ip}:${port}/${rootUrl}/headers/main_headers/all`)
    .then(resp =>
      dispatch(navigationListActions.GET_ALL_NAVLIST(resp.data.data)),
    )
    .catch(err => {
      console.log(err, ' - err at fetchAllNavigationsList');
      // dispatch(carouselImagesActions.FETCH_ERROR_CAROUSEL_IMAGES_LIST());
    });
};

export default { fetchAllNavigationsList };
