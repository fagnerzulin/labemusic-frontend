import { getToken } from '../../utils/localStorageFunctions';

const headerApi = () => {
  const token = getToken();
  return { headers: { Authorization: token } };
};

export default headerApi;
