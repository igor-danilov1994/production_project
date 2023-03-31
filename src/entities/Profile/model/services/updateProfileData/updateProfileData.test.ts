import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThank/testAsyncThank';
import { Country, Currency } from 'shared/const/common';
import { ValidateProfileError } from 'entities/Profile/model/services/validateProfileDate/validateProfileDate';
import { updateProfileData } from './updateProfileData';

const data = {
    first: 'string',
    lastname: 'string',
    age: 30,
    currency: Currency.USD,
    country: Country.Russia,
    city: 'Moscow',
    username: 'haer',
};

describe('updateProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');

        expect(result.payload).toEqual([
            ValidateProfileError.SERVER_ERROR,
        ]);
    });

    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...data, lastname: '' },
            },
        });

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');

        expect(result.payload).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });
});
