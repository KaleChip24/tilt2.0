import api from "./apiConfig";

export const getMachines = async () => {
  try {
    const response = await api.get("/machines/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMachine = async id => {
  try {
    const response = await api.get(`/machines/${id}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createMachine = async machine => {
  try {
    const response = await api.post('/machines/', machine);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateMachine = async (id, machine) => {
  try {
    const response = await api.put(`/machines/${id}/`, machine);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteMachine = async id => {
  try {
    const response = await api.delete(`/machines/${id}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
