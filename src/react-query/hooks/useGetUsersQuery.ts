import { useQuery } from 'react-query';
import { getUsers } from '../queries/User.query';

export const useGetUsersQuery = () => useQuery('users', getUsers);
