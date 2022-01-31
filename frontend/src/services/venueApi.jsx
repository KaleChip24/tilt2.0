import api from "./apiConfig";

const getToken = () => {
  return new Promise((resolve) => {
    resolve(`Bearer ${localStorage.getItem("token") || null}`);
  });
};

export const getVenues = async () => {
  try {
    const response = await api.get("/venues/");
    return response.data;

  } catch (error) {
    throw error;
  }
};

export const getVenue = async id => {
  try {
    const response = await api.get(`/venues/${id}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const createVenue = async venue => {
  try {
    const token = await getToken();

    const headers = {
      headers: {
        Authorization: token
      },
    };

    const response = await api.post('/venues/', venue, headers);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateVenue = async (id, venue) => {
  try {
    const token = await getToken();
    const headers = {
      headers: {
        Authorization: token
      },
    };
    const response = await api.put(`/venues/${id}/`, venue, headers);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteVenue = async id => {
  try {
    const token = await getToken();
    const headers = {
      headers: {
        Authorization: token
      },
    };
    const response = await api.delete(`/venues/${id}/`, headers);
    return response.data;
  } catch (error) {
    throw error;
  }
};
