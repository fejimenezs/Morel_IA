import { api } from "./api";

// Genera análisis IA (simulado)
export const generateSessionAnalysis = async (sessionId: string) => {
  const { data } = await api.post(`/session-analysis/${sessionId}`);
  return data;
};

// Obtiene el análisis de una sesión
export const getSessionAnalysis = async (sessionId: string) => {
  const { data } = await api.get(`/session-analysis/${sessionId}`);
  return data;
};
