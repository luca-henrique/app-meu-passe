import { signInRequest } from '../../../entities/sign-in/api/sign-in-request';
import { useMutation } from '@tanstack/react-query';
import { useNavigationHook } from '../../../app/provider/useNavigation';

interface CredentialsProps {
  cpf: string;
  password: string;
}

export function useLoginRequestMutation() {
  const { navigation } = useNavigationHook();
  return useMutation({
    mutationFn: (data: CredentialsProps) =>
      signInRequest(data),
    onSuccess() {
      navigation('Dashboard');
    },
    onError() {
      console.log('Erro found');
    },
  });
}


