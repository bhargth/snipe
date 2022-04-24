import axios from "axios";
export const axiosRequest = axios.create({
  baseUrl: "http://localhost:5000/publishpapers"
});