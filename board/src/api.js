import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getUsers = () => API.get("/users");
export const addUser = (name) => API.post("/users", { name });
export const claimPoints = (userId) => API.post(`/claim/${userId}`);
export const getLeaderboard = () => API.get("/users/leaderboard");
export const getHistory = (userId) => API.get(`/claim/history/${userId}`);
