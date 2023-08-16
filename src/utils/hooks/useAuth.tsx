import { AuthContext, AuthContextProps } from 'contexts/AuthContext';
import { useContext } from 'react';

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);

  return context;
};
