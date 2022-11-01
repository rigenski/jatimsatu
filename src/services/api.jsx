import axios from "axios";

const api = axios.create({
  baseURL: "http://188.166.245.209:3301/",
});

export default api;
