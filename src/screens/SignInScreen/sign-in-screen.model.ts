import {useForm} from 'react-hook-form';
import {
  SignInScreenSchema,
  SignInScreenSchemaType,
} from './sign-in-screen.schema';
import {zodResolver} from '@hookform/resolvers/zod';
import {FieldTypeSignInScreenSchema} from './sign-in-screen.type';
import {useNavigationHook} from '../../hooks/useNavigation';
import {useMutation} from 'react-query';
import axios from 'axios';

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

  const createEmployee = async (data: any) => {
    console.log(data);
    const {data: response} = await axios.post(
      'http://localhost:3000/sign-in',
      data,
    );
    return response.data;
  };

  const {mutate, isLoading} = useMutation(createEmployee, {
    onSuccess: data => {
      console.log(data);
    },
    onError: () => {
      console.error('');
    },
  });

  const handleChangeInputValue = (
    fieldName: FieldTypeSignInScreenSchema,
    value: string,
  ) => {
    setValue(fieldName, value);
    clearErrors(fieldName);
  };

  function handleEvent(value: SignInScreenSchemaType) {
    console.log
    mutate(value);
  }

  return {
    handleSubmit: handleSubmit(handleEvent),
    handleChangeInputValue,
    errors,
    navigation,
  };
};
