import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: 'https://media-max-server.vercel.app',
})