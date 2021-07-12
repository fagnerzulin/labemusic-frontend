import axios from 'axios';
import headerApi from './config/headerApi';
import { musicUrl } from './config/urlApi';

const getAllMusics = async () => {
  try {
    const result = await axios.get(`${musicUrl}/all`, headerApi());
    const { musics } = result.data;

    return {
      status: true,
      musics,
    };
  } catch (error) {
    return {
      status: false,
      message: error.response.data.message,
    };
  }
};

export default getAllMusics;
