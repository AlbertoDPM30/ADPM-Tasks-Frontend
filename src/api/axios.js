import axios from "axios";

const instance = axios.create({
  //baseURL: "http://localhost:3000/api",
  //baseURL: "https://main.dlxa3ezjjvopg.amplifyapp.com/api",
  baseURL: "https://adpmtasksbackend.onrender.com/api",
  withCredentials: true,
});

export default instance;
