import {z} from 'zod';
import {SignInScreenSchema} from '../../../features/sing-in/model/sign-in-screen.schema';
import {useSignInModel} from '../../../features/sing-in/model/use-sign-in';

export type SignInScreenSchemaType = z.infer<typeof SignInScreenSchema>;
export type FieldTypeSignInScreenSchema = keyof SignInScreenSchemaType;
export type SignInScreenViewProps = ReturnType<typeof useSignInModel>;
