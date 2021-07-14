import axios from 'axios';
import { userUrl } from '../config/urlApi';

const login = async (body) => {
  try {
    const response = await axios.post(`${userUrl}/login`, body);
    const { token } = response.data;

    return {
      status: true,
      token,
    };
  } catch (error) {
    return {
      status: false,
      message: error.response.data.message,
    };
  }
};

export default login;
