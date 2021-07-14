import axios from 'axios';
import headerApi from '../config/headerApi';
import { albumUrl } from '../config/urlApi';

const getAllAlbum = async () => {
  try {
    const response = await axios.get(`${albumUrl}/all`, headerApi());
    const { albums } = response.data;

    return {
      status: true,
      albums,
    };
  } catch (error) {
    return {
      message: error.response.data.message,
      status: false,
    };
  }
};

export default getAllAlbum;
