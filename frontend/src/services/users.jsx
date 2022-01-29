import api from "./apiConfig";


export const signUp = async (credentials) => {
  try {
    const resp = await api.post("/signUp/", credentials);
    localStorage.setItem("token", resp.data.access);
    localStorage.setItem("refresh", resp.data.refresh)
    return resp;
  } catch (error) {
    throw error;
  }
};

export const signIn = async (credentials) => {
  try {
    const resp = await api.post("/user/signIn/", credentials);
    localStorage.setItem("token", resp.data.access);
    localStorage.setItem("refresh", resp.data.refresh)
    return resp;
  } catch (error) {
    throw error;
  }
};

export const signOut = async () => {
  try {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh");
    return true;
  } catch (error) {
    throw error;
  }
};

export const changePassword = async (passwords, user) => {
  try {
    const resp = await api.post("/");
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const verifyUser = async () => {
  const refresh = localStorage.getItem("refresh");
  if (refresh) {
    const res = await api.get("/verify/", { refresh });
    localStorage.setItem("token", res.data.access)
    return res;
  }
  return false;
};
