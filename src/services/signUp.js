import axios from 'axios';
import { userUrl } from './config/urlApi';

const signUp = async (body) => {
  try {
    const response = await axios.post(`${userUrl}/signup`, body);
    const { token } = response.data;
    return { status: true, token };
  } catch (error) {
    return { status: false, message: error.response.data.message };
  }
};

export default signUp;
