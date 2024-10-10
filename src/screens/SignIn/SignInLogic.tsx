import z from 'zod';


import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const schema = z
  .object({
    cpf: z.string(),
    password: z
      .string()
      .min(6)
      .max(20),
  })
  .required();

export const SignInScreenLogic = () => {
  const {
    setValue,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return { setValue, handleSubmit, register, errors };
};
