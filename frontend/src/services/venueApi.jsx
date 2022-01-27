import api from "./apiConfig";

export const getVenues = async () => {
  try {
    const response = await api.get("/venues/");
    console.log(response.data)
    return response.data;

  } catch (error) {
    throw error;
  }
};

export const getVenue = async (id) => {
  try {
    const response = await api.get(`/venues/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const crateVenue = async (venue) => {
  try {
    const response = await api.post('/venues', venue);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateVenue = async (id, venue) => {
  try {
    const response = await api.put(`/venues/${id}`, venue);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteVenue = async (id) => {
  try {
    const response = await api.delete(`/venues/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
