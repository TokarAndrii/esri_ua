import axios from 'axios';

// const BASE_URL = '192.168.0.53:9091/api/v1/sendmail';

const axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  },
};

const sendDataToBackEnd = data => {
  console.log(data, ' - sendDataToBackEnd');
  return axios
    .post('http://192.168.0.53:9091/api/v1/sendmail', data, axiosConfig)
    .then(resp => resp)
    .catch(err => {
      console.log(err.response.data);
      throw err;
    });
};

export default sendDataToBackEnd;
