import axios from 'axios';

interface CredentialsProps {
  cpf: string;
  password: string;
}

export const signInRequest = async (data: CredentialsProps) => {
  return await axios.post('http://localhost:3000/sign-in', data);
};
