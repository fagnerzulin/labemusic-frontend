import axios from 'axios';
import headerApi from '../config/headerApi';
import { genreUrl } from '../config/urlApi';

const getAllGenre = async () => {
  try {
    const response = await axios.get(`${genreUrl}/all`, headerApi());
    const { genres } = response.data;
    return {
      status: true,
      genres,
    };
  } catch (error) {
    return {
      status: false,
      message: error.response.data.message,
    };
  }
};

export default getAllGenre;
