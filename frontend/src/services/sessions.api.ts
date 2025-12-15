import api from "./axios";

// Obtener sesiones de un paciente
export const getSessionsByPatient = async (patientId: string) => {
  const { data } = await api.get(`/sessions/patient/${patientId}`);
  return data;
};

// Crear nueva sesión
export const createSession = async (
  patientId: string,
  title: string
) => {
  const { data } = await api.post(
    `/sessions/patient/${patientId}`,
    { title }
  );
  return data;
};

// Actualizar estado de sesión
export const updateSessionStatus = async (
  sessionId: string,
  status: "PENDING" | "PROCESSING" | "COMPLETED" | "FAILED"
) => {
  const { data } = await api.patch(
    `/sessions/${sessionId}/status`,
    { status }
  );
  return data;
};
