import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://staging.darveys.com/index.php/mobileappbuilder/apicall/'
});

axiosInstance.interceptors.request.use(
  config => {
    const sid = localStorage.getItem('SID');

    if (sid) {
      config.params = { ...config.params, SID: sid };

      if (config.data instanceof FormData) {
        config.data.append('session_data', sid);
      } else {
        config.data = { ...config.data, session_data: sid };
      }
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => {
    if (response.data && response.data.SID) {
      localStorage.setItem('SID', response.data.SID);
    }
    return response;
  },
  error => {
    if (error.response && error.response.data && error.response.data.SID) {
      localStorage.setItem('SID', error.response.data.SID);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
