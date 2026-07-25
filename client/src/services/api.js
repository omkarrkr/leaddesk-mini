import axios from "axios";

const api = axios.create({
  baseURL: "https://leaddesk-backend-p357.onrender.com/api",
});

export default api;

// Lead APIs
export const createLead = (data) => api.post("/leads", data);

export const getLeads = () => api.get("/leads");

export const updateStatus = (id, status) =>
  api.put(`/leads/${id}`, { status });

// Auth API
export const loginAdmin = (data) =>
  api.post("/auth/login", data);