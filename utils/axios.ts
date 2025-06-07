import axios from "axios";

const api = axios.create({
  baseURL: "https://feedback-company-backend.onrender.com/api/v1/", 
  // headers: {
  //   Authorization: 'Bearer token'
  // }
});

export default api;