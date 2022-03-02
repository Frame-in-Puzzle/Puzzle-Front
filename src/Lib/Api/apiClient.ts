import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: localStorage.getItem("accessToken") ?? "",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,DELETE,PATCH,PUT,OPTIONS",
  },
  withCredentials: true,
});
