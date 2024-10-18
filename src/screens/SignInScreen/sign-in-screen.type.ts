import {z} from 'zod';
import {SignInScreenSchema} from './sign-in-screen.schema';
import {useSignInModel} from './sign-in-screen.model';

export type SignInScreenSchemaType = z.infer<typeof SignInScreenSchema>;
export type FieldTypeSignInScreenSchema = keyof SignInScreenSchemaType;
export type SignInScreenViewProps = ReturnType<typeof useSignInModel>;
