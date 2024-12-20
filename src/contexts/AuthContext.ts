import { createContext } from 'react';

interface AuthTypes {
  auth: AnyKeyValue;
  setAuth: React.Dispatch<React.SetStateAction<AnyKeyValue>>;
}
interface AnyKeyValue {
  [key: string]: unknown;
}
export const AuthContext = createContext<AuthTypes>({
  setAuth: () => {},
  auth: {},
});
