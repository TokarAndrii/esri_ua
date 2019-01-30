import axios from 'axios';
import apiConfig from '../config';

const { protocol, port, ip, rootUrl } = apiConfig;

const axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  },
};

const sendDataToBackEnd = data => {
  console.log(data, ' - sendDataToBackEnd');
  return axios
    .post(`${protocol}://${ip}:${port}/${rootUrl}/sendmail`, data, axiosConfig)
    .then(resp => resp)
    .catch(err => {
      console.log(err.response.data);
      throw err;
    });
};

export default sendDataToBackEnd;
