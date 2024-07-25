// auth.types.ts

export interface User {
  id: number;
  name: string;
  last_name: string  | undefined;
  other_name: string | null;
  email: string;
  email_verified_at: string;
  type: string;
  phone: string | null;
  created_at: string;
  updated_at: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
}

export interface LoginResponse {
  token: {
    access_token: string;
  };
}

export interface UserResponse {
  status: boolean;
  data: User;
}
