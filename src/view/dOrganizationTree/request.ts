/*
 * @Date: 2023-11-10 18:07:32
 * @Auth: 873768511@qq.com
 * @LastEditors: 873768511@qq.com
 * @LastEditTime: 2023-11-13 09:23:54
 * @FilePath: \my-v3-app\src\utils\request.ts
 */
import axios from 'axios'
export const PATH_URL = '/api'
interface ApiConfig {
  body: object;
  data: object
}
async function request(url: string, options: ApiConfig) {
  // 创建 axios 实例
  const service = axios.create({
    baseURL: PATH_URL, // api base_url
    timeout: 6000 // 请求超时时间
  });
  // 请求拦截
  service.interceptors.request.use(config => {
    // 这里可设置请求头等信息
    if (options && options.body) {
      config.data = options.body;
    }
    config.headers.Authorization='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxLHd3IiwiaXNzIjoiYWRtaW4iLCJleHAiOjE3MDA0NDMzOTYsImlhdCI6MTY5OTgzODU5Niwicm9sIjoiW1wiUk9MRV9BRE1JTlwiXSJ9.BOwVqGjt0vxbJct2lSyJ_3KQ2N4jTE_YGpZgO7TPfTUvV3w2zZ2n7z0tIXr5XfNOF2I2trh0O-HmNx6XfB-gOQ'
    return config;
  });
  // 返回拦截
  service.interceptors.response.use(response => {
    // 这里可进行返回数据的格式化等操作
    return response.data;
  });
  return service(url, options);
}
export default request;
