import z from 'zod';

export const SignInSchema = z
  .object({
    cpf: z.string(),
    password: z
      .string()
      .min(6)
      .max(20),
  });
