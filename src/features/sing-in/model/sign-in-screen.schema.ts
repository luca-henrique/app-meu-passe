import z from 'zod';

import {isValidCpf, commonPasswords} from '../../../shared/validations/index';

const CPF_MIN_LENGTH = 11;
const PASSWORD_MIN_LENGTH = 4;
const PASSWORD_MAX_LENGTH = 16;

export const SignInScreenSchema = z
  .object({
    cpf: z
      .string({required_error: 'CPF/CNPJ é obrigatório.'})
      .refine(doc => {
        const cleanedDoc = doc.replace(/\D/g, '');
        return cleanedDoc.length >= CPF_MIN_LENGTH;
      }, `CPF deve conter no mínimo ${CPF_MIN_LENGTH} caracteres.`)
      .refine(
        doc => {
          return isValidCpf(doc);
        },
        {message: 'CPF inválido'},
      ),
    password: z
      .string()
      .min(
        PASSWORD_MIN_LENGTH,
        `A senha deve ter no mínimo ${PASSWORD_MIN_LENGTH} caracteres.`,
      )
      .max(
        PASSWORD_MAX_LENGTH,
        `A senha deve ter no máximo ${PASSWORD_MAX_LENGTH} caracteres.`,
      )
      .regex(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula.')
      .regex(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula.')
      .regex(/\d/, 'A senha deve conter pelo menos um número.')
      .regex(/[\W_]/, 'A senha deve conter pelo menos um caractere especial.')
      .refine(password => !/\s/.test(password), {
        message: 'A senha não pode conter espaços.',
      })
      .refine(password => !commonPasswords.includes(password), {
        message: 'A senha é muito comum, por favor escolha uma mais forte.',
      }),
  })
  .required();

export type SignInScreenSchemaType = z.infer<typeof SignInScreenSchema>;
