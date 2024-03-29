import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('should return password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'username',
                password: 'username',
                isLoading: false,
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('username');
    });
    test('should return default state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual(undefined);
    });
});
