import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/leads",
});

export default api;

export const createLead = (data) => api.post("/", data);

export const getLeads = () => api.get("/");

export const updateStatus = (id, status) =>
  api.put(`/${id}`, { status });