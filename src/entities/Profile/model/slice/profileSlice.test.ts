import { Country, Currency } from 'shared/const/common';
import { updateProfileData } from 'entities/Profile';
import { ValidateProfileError } from 'entities/Profile/model/services/validateProfileDate/validateProfileDate';
import { ProfileSchema } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';

const data = {
    first: 'string',
    lastname: 'string',
    age: 30,
    currency: Currency.USD,
    country: Country.Russia,
    city: 'Moscow',
    username: 'haer',
};

describe('profileSlice.test', () => {
    test('test setReadonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
        ))
            .toEqual({ readonly: true });
    });

    test('test canceledEdit', () => {
        const state: DeepPartial<ProfileSchema> = { profile: data, form: { username: '' } };

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.canceledEdit(),
        ))
            .toEqual({
                readonly: true,
                validateError: undefined,
                profile: data,
                form: data,
            });
    });

    test('test updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = { profile: data, form: { username: '' } };

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile(data),
        ))
            .toEqual({
                form: data,
                profile: data,
            });
    });

    test('test updateProfileThunk pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateError: [ValidateProfileError.NOT_DATA],
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        ))
            .toEqual({
                isLoading: true,
                validateError: undefined,
            });
    });

    test('test updateProfileThunk fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            validateError: [ValidateProfileError.NOT_DATA],
            profile: undefined,
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        ))
            .toEqual({
                isLoading: false,
                validateError: undefined,
                profile: data,
                form: data,
                readonly: true,
            });
    });
});
