import axios from 'axios';

// 创建 axios 实例
const axiosService = axios.create({
    baseURL: 'http://geek.itheima.net/v1_0', // 基础 URL
    timeout: 5000, // 超时时间
});

// 请求拦截器
axiosService.interceptors.request.use(
    (config) => {
        // 在此添加请求头或其他请求配置
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
        // 检查响应的状态码
        const { status, data } = response;
        if (status !== 200) {
            // 处理非200状态码的错误
            console.error('请求错误：', data.message || 'Error');
            return Promise.reject(new Error(data.message || 'Error'));
        }
        return data;
    },
    (error) => {
        // 处理响应错误
        console.error('响应错误：', error.message);
        return Promise.reject(error);
    }
);

// 导出封装的 axios 实例
export default axiosService;
