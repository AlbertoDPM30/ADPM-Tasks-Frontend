import axios from "axios";

const instance = axios.create({
  //baseURL: "http://localhost:3000/api",
  //baseURL: "http://3.20.40.119/api",
  //baseURL: "https://adpmtasksbackend.onrender.com/api",
  withCredentials: true,
});

export default instance;
