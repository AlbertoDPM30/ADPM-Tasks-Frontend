import axios from "axios";

const instance = axios.create({
  //baseURL: "http://localhost:3000/api",
  //baseURL: "https://main.dlxa3ezjjvopg.amplifyapp.com/api",
  baseURL: "http://3.20.40.119/api",
  withCredentials: true,
});

export default instance;
