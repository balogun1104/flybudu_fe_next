// hooks/useAuth.ts
import { useSelector } from 'react-redux';
import { selectIsAuthenticated, selectUser } from '@/redux/auth/authslice';

export const useAuth = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);

  return { isAuthenticated, user };
};