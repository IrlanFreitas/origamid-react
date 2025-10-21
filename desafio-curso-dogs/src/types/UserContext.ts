import type { User } from "./User";

export interface UserContextType {
  data?: User | null;
  userLogin: any;
  userLogout: any;
  error?: string;
  login: boolean; 
  loading: boolean;
}