import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/StoreProvider';
import { Country, Currency } from 'shared/const/common';
import { getProfile } from './getProfile';

describe('getProfile.test', () => {
    test('should return error', () => {
        const data = {
            first: 'string',
            lastname: 'string',
            age: 30,
            currency: Currency.USD,
            country: Country.Russia,
            city: 'Moscow',
            username: 'haer',
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                profile: data,
            },
        };
        expect(getProfile(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfile(state as StateSchema)).toEqual(undefined);
    });
});
