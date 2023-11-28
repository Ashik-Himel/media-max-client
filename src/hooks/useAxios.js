import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: 'https://server.mediamax.com.bd'
})