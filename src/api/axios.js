import axios from 'axios';
export const instance = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: `${process.env.REACT_APP_API_URL}`,
});
