import axios from "axios";

const api = axios.create({
  baseURL: "https://github.com/Argemiro27/webprojeto03",
  headers: {
    'Content-Type': 'application/json',
  }
})

export default api;