import api from "./apiConfig";

const getToken = () => {
  return new Promise((resolve) => {
    resolve(`Bearer ${localStorage.getItem("token") || null}`);
  });
};


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
    const token = await getToken();
    const headers = {
      headers: {
        Authorization: token
      },
    };
    const response = await api.post('/machines/', machine, headers);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateMachine = async (id, machine) => {
  try {
    const token = await getToken();
    const headers = {
      headers: {
        Authorization: token
      },
    };
    const response = await api.put(`/machines/${id}/`, machine, headers);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteMachine = async id => {
  try {
    const token = await getToken();
    const headers = {
      headers: {
        Authorization: token
      },
    };
    const response = await api.delete(`/machines/${id}/`, headers);
    return response.data;
  } catch (error) {
    throw error;
  }
};
