import API from '../axiosConfig';

const get = async (endpoint, data) => {
  try {
    const response = await API.get(endpoint, data);

    return response.data;
  } catch (error) {
    return error;
  }
};

export default get;
