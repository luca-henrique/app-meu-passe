import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigationHook } from '../../../app/provider/useNavigation';
import { SignInScreenSchema, SignInScreenSchemaType } from './sign-in-screen.schema';
import { FieldTypeSignInScreenSchema } from '../../../entities/sign-in/types/sign-in-screen.type';
import { useForm } from 'react-hook-form';
import { useLoginRequestMutation } from '../api/use-sign-in-mutation';

export const useSignInModel = () => {
  const { setValue, handleSubmit, clearErrors, formState } =
    useForm<SignInScreenSchemaType>({
      resolver: zodResolver(SignInScreenSchema),
      mode: 'all',
      defaultValues: {
        cpf: '',
        password: '',
      },
    });

  const { errors } = formState;

  const { navigation } = useNavigationHook();
  const { mutate } = useLoginRequestMutation();

  const handleChangeInputValue = (
    fieldName: FieldTypeSignInScreenSchema,
    value: string,
  ) => {
    setValue(fieldName, value);
    clearErrors(fieldName);
  };

  function handleEvent(value: SignInScreenSchemaType) {
    mutate(value);
  }

  return {
    handleSubmit: handleSubmit(handleEvent),
    handleChangeInputValue,
    errors,
    navigation,
  };
};
