import axios from "axios";


const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
});

axiosClient.interceptors.request.use((config) => {
    const token = '123';
    // config.headers.Authorization = `Bearer ${localStorage.getItem('TOKEN')}`
    config.headers.Authorization = `Bearer ${token}`
    return config
  });
  
axiosClient.interceptors.response.use(response => {
    return response;
    }, error => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('TOKEN')
      window.location.reload();
      // router.navigate('/login')
      return error;
    }
    throw error;
})

export default axiosClient;