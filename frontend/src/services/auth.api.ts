import api from "./axios";

export const login = async (email: string, password: string) => {
  const { data } = await api.post("/api/auth/login", {
    email,
    password,
  });

  return data;
};
