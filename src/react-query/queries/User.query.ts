import axios from '~utils/axios';

export const getUsers = async () => {
  const { data } = await axios.get('/users');

  return data;
};
