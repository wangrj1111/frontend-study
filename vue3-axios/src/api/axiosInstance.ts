import axios from "axios";

//创建axios实例
const api=axios.create({
    baseURL:'http://api.zhihu.com',
    timeout:8000,
    headers:{
        'Content-Type':'application/json',
        Authorization:`Bearer ${localStorage.getItem('token')}`
    }
})
//请求拦截器
api.interceptors.request.use(
    (config) => {
      // 获取 token，添加到 请求头
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

//响应拦截器
// 响应拦截器
api.interceptors.response.use(
    (response) => {
      // 解析响应数据
      return response.data;
    },
    (error) => {
      if (error.response) {
        const status = error.response.status;
        // 根据不同的状态码进行处理
        switch (status) {
          case 401:
            console.error("未认证，请登录");
            // 跳到登录页面
            break;
          case 403:
            console.error("权限不足，访问被禁止");
            break;
          case 404:
            console.error("请求的资源不存在");
            break;
          case 500:
            console.error("服务器内部错误");
            break;
          default:
            console.error("请求错误，", error.response.data.message||"未知错误");
        }
      }
    }
  );
export default api