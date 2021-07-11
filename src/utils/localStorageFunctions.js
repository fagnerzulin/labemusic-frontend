export const saveToken = (token) => {
  localStorage.setItem('token', token);
};

export const deleteToken = () => {
  localStorage.removeItem('token');
};

export const getToken = () => localStorage.getItem('token');

export const hasToken = () => !!getToken();
