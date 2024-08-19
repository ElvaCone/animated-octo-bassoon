import axios from 'axios';

// 创建 axios 实例
const axiosService = axios.create({
    baseURL: 'https://api.example.com', // 基础 URL
    timeout: 5000, // 超时时间
});

// 请求拦截器
axiosService.interceptors.request.use(
    (config) => {
        // 在请求发送之前做一些处理，比如添加 token 到请求头
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`; // 将 token 加到请求头
        }
        return config;
    },
    (error) => {
        // 处理请求错误
        return Promise.reject(error);
    }
);

// 响应拦截器
axiosService.interceptors.response.use(
    (response) => {
        // 响应数据处理，比如统一处理某种返回状态
        const res = response.data;
        if (res.status !== 200) {
            // 可以根据不同状态码进行错误提示或处理
            console.error('请求错误：', res.message || 'Error');
            return Promise.reject(new Error(res.message || 'Error'));
        }
        return res;
    },
    (error) => {
        // 处理响应错误
        console.error('响应错误：', error.message);
        return Promise.reject(error);
    }
);

// 导出封装的 axios 实例
export default axiosService;
