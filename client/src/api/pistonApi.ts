import axios, { AxiosInstance } from "axios";

const pistonBaseUrl = "https://emkc.org/api/v2/piston";

const instance: AxiosInstance = axios.create({
  baseURL: pistonBaseUrl,
  headers: {
    "Content-Type": "application/json",
    "Authorization": "ae1dd507-6081-461c-b174-d0e8de9584f4" // drop the key directly here
  },
});

export default instance;
