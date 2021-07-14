import axios from 'axios';
import headerApi from '../config/headerApi';
import { genreUrl } from '../config/urlApi';

const createGenre = async (body) => {
  try {
    const response = await axios.post(`${genreUrl}/create`, body, headerApi());
    return {
      status: true,
      genre: response.data,
    };
  } catch (error) {
    return {
      status: false,
      message: error.response.data.message,
    };
  }
};

export default createGenre;
