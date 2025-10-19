import axios from 'axios';
import {getAccessToken, setAccessToken} from "./auth.ts";
import {REFRESH} from "../hooks/api/URLs.ts";
import {toast} from "react-toastify";

const ENABLE_DELAY = import.meta.env.VITE_ENABLE_DELAY === 'true';
const DELAY_MS = Number(import.meta.env.VITE_DELAY_MS) || 1500;

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: import.meta.env.VITE_API_TIMEOUT,
    headers : {
        'Content-Type': 'application/json'
    }
});

axiosInstance.interceptors.request.use(async (config) => {
    if (ENABLE_DELAY) {
        await new Promise((resolve) => setTimeout(resolve, DELAY_MS));
    }
    const token = getAccessToken();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

axiosInstance.interceptors.request.use( (config) => {
    const token = getAccessToken();
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config;
});

axiosInstance.interceptors.response.use( (res) => res,
    async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const res = await axios.post(
                    REFRESH,
                    {},
                    { withCredentials: true }
                );

                const newAccessToken = res.data.accessToken;
                setAccessToken(newAccessToken);

                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                return axiosInstance(originalRequest);
            } catch (refreshError) {
                toast.warn('Vui lòng đăng nhập lại 🙏');
                window.location.href = '/login';
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;