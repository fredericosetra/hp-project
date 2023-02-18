import axios from "axios";

const hpApi = axios.create({
  baseURL: "https://hp-api.onrender.com/api",
});

export default hpApi;
