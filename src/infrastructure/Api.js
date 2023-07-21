import axios from "axios";
import Storage from "./Storage";

const API = (function () {
  const params = {};
  const api = axios.create({ params });

  api.defaults.baseURL = import.meta.env.VITE_API_URL;

  const setToken = (token = "") => {
    const authorizationToken = token || `${Storage.get()?.token}`;
    api.defaults.headers.Authorization = authorizationToken;
  };

  setToken(); // Set token from local storage by default

  const get = (url) => api.get(url);
  const post = (url, body) => api.post(url, body);
  const put = (url, body) => api.put(url, body);

  // Multipart handler
  const multipartHeader = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  const postMultipartWithoutBaseURL = (url, body, config) =>
    axios.post(url, body, { ...config, ...multipartHeader });

  return {
    setToken,
    get,
    post,
    put,
    postMultipartWithoutBaseURL,
  };
})();

export default API;
