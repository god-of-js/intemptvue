import axios from "axios";
import { BASE_URL } from "../config/config";
let config = {
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
};
const service = axios.create(config);
service.interceptors.response.use(
  ({ data }) => {
    return Promise.resolve(data);
  },
  (err) => {
    return Promise.reject(err.response);
  }
);
export default service;
