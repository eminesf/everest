import axios from "axios";

const api = axios.create({
  baseURL: "https://everest-interview-public-files.s3.amazonaws.com",
  timeout: 5000,
});

export default api;
