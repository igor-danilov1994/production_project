import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

import { getLoginLoading } from './getLoginLoading';

describe('getLoginLoading.test', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
                username: 'sd',
                password: 'sd',
            },
        };
        expect(getLoginLoading(state as StateSchema)).toEqual(true);
    });
    test('should return default', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginLoading(state as StateSchema)).toEqual(false);
    });
});
