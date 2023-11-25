import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:5001',
  // baseURL: 'https://media-max-server.vercel.app',
  withCredentials: true,
})