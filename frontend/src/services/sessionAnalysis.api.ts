import api from "./axios";


export const generateSessionAnalysis = async (sessionId: string) => {
  const { data } = await api.post(`/session-analysis/${sessionId}`);
  return data;
};


export const getSessionAnalysis = async (sessionId: string) => {
  const { data } = await api.get(`/session-analysis/${sessionId}`);
  return data;
};
