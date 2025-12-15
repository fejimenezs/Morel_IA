import { api } from "./api";

export const getAppointments = async () => {
  const res = await api.get("/appointments");
  return res.data;
};
