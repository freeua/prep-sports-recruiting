import API from "../axiosConfig";

const get = async (endpoint, config) => {
  try {
    const response = await API.get(endpoint, config);

    return response.data;
  } catch (error) {
    return error;
  }
};

export default get;
