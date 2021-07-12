import axios from 'axios';
import headerApi from './config/headerApi';
import { musicUrl } from './config/urlApi';

const getMusicBy = async (id) => {
  try {
    const response = await axios.get(`${musicUrl}/${id}`, headerApi());
    const { music } = response.data;
    return { status: true, music };
  } catch (error) {
    return {
      status: false,
      message: error.response.data.message,
    };
  }
};

export default getMusicBy;
