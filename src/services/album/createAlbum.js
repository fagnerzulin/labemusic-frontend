import axios from 'axios';
import headerApi from '../config/headerApi';
import { albumUrl } from '../config/urlApi';

const createAlbum = async (body) => {
  try {
    const response = await axios.post(`${albumUrl}/create`, body, headerApi());

    return {
      status: true,
      album: response.data,
    };
  } catch (error) {
    return {
      message: error.response.data.message,
      status: false,
    };
  }
};

export default createAlbum;
