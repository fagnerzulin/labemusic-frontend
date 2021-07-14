import axios from 'axios';
import headerApi from '../config/headerApi';
import { musicUrl } from '../config/urlApi';

const createMusic = async (body) => {
  try {
    const response = await axios.post(`${musicUrl}/create`, body, headerApi());

    return {
      status: true,
      music: response.data,
    };
  } catch (error) {
    return {
      status: false,
      message: error.response.data.message,
    };
  }
};

export default createMusic;
