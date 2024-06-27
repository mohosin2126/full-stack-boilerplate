import axios from 'axios';

const useApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

useApi.interceptors.request.use(
    config => {

        const token = document?.cookie?.split('; ')?.find(row => row?.startsWith('token='))?.split('=')[1] || null;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default useApi;