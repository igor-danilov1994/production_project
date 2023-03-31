import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from 'entities/Profile/model/services/validateProfileDate/validateProfileDate';
import { getValidateProfileError } from './getValidateProfileError';

describe('getValidateProfileError.test', () => {
    test('should return error', () => {
        const validateError = [
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_COUNTRY,
        ];
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError,
            },
        };
        expect(getValidateProfileError(state as StateSchema)).toEqual(validateError);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getValidateProfileError(state as StateSchema)).toEqual(undefined);
    });
});
