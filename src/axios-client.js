import axios from 'axios'

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
})

axiosClient.interceptors.request.use(
  //onFulfilled:
  (config) => {
    const token = localStorage.getItem('ACCESS_TOKEN')
    config.headers.Authorization = `Bearer ${token}`
    return config;
  }
)

axiosClient.interceptors.response.use(
  //onFulfilled:
  (response) => {
    return response;
  },
  //onRejected:
  (error) => {
    const {response} = error;
    if (response.status === 401) {
      localStorage.removeItem('ACCESS_TOKEN');
    }else if (response.status === 404) {
      //Show not found
    }

    throw error;
  }
)

export default axiosClient