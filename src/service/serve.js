import axios from "axios";
import { message } from "antd";
import qs from "qs";
/**
 * 设置超时时间和跨域是否允许携带凭证
 */
const baseURL = "/mobcent/app/web/index.php?r=";
axios.defaults.timeout = 10000; //10秒
axios.defaults.withCredentials = true;

/**
 * 设置post请求头
 * application/json;charset=UTF-8   JSON格式
 * application/x-www-form-urlencoded;charset=UTF-8  Form表单格式
 */
axios.defaults.headers["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";

var CancelToken = axios.CancelToken;
let sources = []; // 定义数组用于存储每个ajax请求的取消函数及对应标识

/**
 * 请求防抖当一个url地址被请求多次就会取消前一次请求
 */
let removeSource = (config) => {
  for (let source in sources) {
    // 当多次请求相同时，取消之前的请求
    if (sources[source].umet === config.url + "&" + config.method) {
      sources[source].cancel("取消请求");
      sources.splice(source, 1);
    }
  }
};

/**
 * 请求拦截器
 */
axios.interceptors.request.use(
  (config) => {
    removeSource(config);
    config.cancelToken = new CancelToken((c) => {
      // 将取消函数存起来
      sources.push({ umet: config.url + "&" + config.method, cancel: c });
    });
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  (res) => {
    if (res.data.errcode || res.data.rs !== 1) {
      message.error(res.data.msg);
    }
    removeSource(res.config);

    return res.data;
  },
  (error) => {
    if (!error.response) return;
    switch (error.response.status) {
      // 401: 未登录
      // 未登录则跳转登录页面，并携带当前页面的路径
      // 在登录成功后返回当前页面，这一步需要在登录页操作。
      case 401:
        if (window.location.hostname === "localhost") {
          axios.post("/api/v1/login?client_name=form", {
            userName: "lixiaoyao4_vendor",
            password: 123456,
          });
        } else {
          window.location = error.response.headers.locationurl;
        }
        break;

      // 403 token过期
      // 登录过期对用户进行提示
      // 清除本地token和清空vuex中token对象
      // 跳转登录页面
      case 403:
        message.error("登录过期，请重新登录");
        // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
        if (window.location.hostname === "localhost") {
          axios.post("/api/v1/login?client_name=form", {
            userName: "lixiaoyao4_vendor",
            password: 123456,
          });
        } else {
          window.location = error.response.headers.locationurl;
        }
        break;

      // 404请求不存在
      case 404:
        message.error("访问资源不存在");
        break;
      // 其他错误，直接抛出错误提示
      default:
        message.error(error.response.data.message);
    }
    return Promise.reject(error.response);
  }
);

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: {
          ...params,
        },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseURL}${url}`, qs.stringify(params))
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

// 对外暴露
export { post, get };
