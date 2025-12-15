import axios from "axios";

/* =========================
   CONFIG
========================= */

const API = axios.create({
  baseURL: "/api",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

/* =========================
   PATIENTS API
========================= */

// GET /api/patients
export const getPatients = async () => {
  const res = await API.get("/patients");
  return res.data;
};

// GET /api/patients/:id
export const getPatientById = async (id: string) => {
  const res = await API.get(`/patients/${id}`);
  return res.data;
};

// POST /api/patients
export const createPatient = async (data: any) => {
  const res = await API.post("/patients", data);
  return res.data;
};
