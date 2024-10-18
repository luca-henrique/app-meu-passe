import {useForm} from 'react-hook-form';
import {
  SignInScreenSchema,
  SignInScreenSchemaType,
} from './sign-in-screen.schema';
import {zodResolver} from '@hookform/resolvers/zod';
import {FieldTypeSignInScreenSchema} from './sign-in-screen.type';
import {useNavigationHook} from '../../hooks/useNavigation';

export const useSignInModel = () => {
  const {setValue, handleSubmit, clearErrors, watch, formState} =
    useForm<SignInScreenSchemaType>({
      resolver: zodResolver(SignInScreenSchema),
      mode: 'all',
      defaultValues: {
        cpf: '',
        password: '',
      },
    });

  console.log(watch());
  const {errors} = formState;

  const {navigation} = useNavigationHook();

  console.log(errors);

  function handleEvent(value: SignInScreenSchemaType) {
    console.log(value);
  }

  const handleChangeInputValue = (
    fieldName: FieldTypeSignInScreenSchema,
    value: string,
  ) => {
    setValue(fieldName, value);
    clearErrors(fieldName);
  };

  return {
    handleSubmit: handleSubmit(handleEvent),
    handleChangeInputValue,
    errors,
    navigation,
  };
};
