import API from "../axiosConfig";

const post = async (endpoint, data = {}, headers = {}) => {
  try {
    const response = await API.post(endpoint, data, headers);
    return response.data;
  } catch (error) {
    return error;
  }
};

export default post;
