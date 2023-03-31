import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';

describe('getProfileError.test', () => {
    test('should return error', () => {
        const form = {
            username: 'string',
            password: 'string',
            isLoading: false,
            error: 'string',
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
