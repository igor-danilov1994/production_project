import { StateSchema } from 'app/providers/StoreProvider';

export const getValidateProfileError = (state: StateSchema) => state?.profile?.validateError;
