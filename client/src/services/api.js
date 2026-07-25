import axios from "axios";

const api = axios.create({
  baseURL: "https://leaddesk-backend-p357.onrender.com/api",
});

export default api;

export const createLead = (data) => api.post("/", data);

export const getLeads = () => api.get("/");

export const updateStatus = (id, status) =>
  api.put(`/${id}`, { status });