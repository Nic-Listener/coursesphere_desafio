import { api } from '../api/api';

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export const loginUser = async (email: string, password: string): Promise<User> => {
  const response = await api.get<User[]>('/users', {
    params: { email, password }
  });

  if (response.data.length === 0) {
    throw new Error('Email ou senha inválidos');
  }

  return response.data[0];
};
