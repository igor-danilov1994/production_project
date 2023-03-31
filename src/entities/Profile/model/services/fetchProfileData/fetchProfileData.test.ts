import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThank/testAsyncThank';
import { Country, Currency } from 'shared/const/common';
import { fetchProfileData } from './fetchProfileData';

const data = {
    first: 'string',
    lastname: 'string',
    age: 30,
    currency: Currency.USD,
    country: Country.Russia,
    city: 'Moscow',
    username: 'haer',
};

describe('fetchProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('fulfilled');
    });
});
