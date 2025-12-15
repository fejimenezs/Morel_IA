import api from "./axios";

// GET /api/patients
export const getPatients = async () => {
  const res = await api.get("/patients");
  return res.data;
};

// GET /api/patients/:id
export const getPatientById = async (id: string) => {
  const res = await api.get(`/patients/${id}`);
  return res.data;
};

// POST /api/patients
export const createPatient = async (data: any) => {
  const res = await api.post("/patients", data);
  return res.data;
};
