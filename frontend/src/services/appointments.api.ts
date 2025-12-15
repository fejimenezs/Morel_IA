import api from "./axios";

export const getAppointments = async () => {
  const { data } = await api.get("/appointments");
  return data;
};
