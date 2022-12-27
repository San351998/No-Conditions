import axios from "axios";

axios.defaults.baseURL = 'http://localhost:4000'

export const axiosRequest = (setLoading) => {
  axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    setLoading(true)
    return config;
  }, function (error) {
    setLoading(false)
    // Do something with request error
    return Promise.reject(error);
  });
}

export const axiosResponse = (setLoading) => {
  axios.interceptors.response.use(function (config) {
    // Do something before request is sent
    setLoading(false)
    return config;
  }, function (error) {
    // Do something with request error
    setLoading(false)
    return Promise.reject(error);

  })
}

export const apicallPost = (data, url) =>
  new Promise((resolve, reject) => {
    axios.post(url, data).then(data => {
      resolve(data.data.data);
    }).catch(err => {
      reject(err)
    })
  });