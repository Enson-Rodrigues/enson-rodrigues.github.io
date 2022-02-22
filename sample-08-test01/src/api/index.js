import axios from 'axios';

const https = axios.create({
    baseURL: 'https://fakestoreapi.com/'
});

// Add a request interceptor
https.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log(config);
    Object.assign(config.headers, {token: "absna123sxas"});
    document.getElementsByClassName('loader')[0].style.display='block';
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
https.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    //Object.assign(response.data, { list: response.data, message: "hello there"})
    document.getElementsByClassName('loader')[0].style.display='none';
    console.log(response);
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default https;