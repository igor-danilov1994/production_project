import { Country, Currency } from 'shared/const/common';
import { validateProfileDate, ValidateProfileError } from './validateProfileDate';

const data = {
    first: 'string',
    lastname: 'string',
    age: 30,
    currency: Currency.USD,
    country: Country.Russia,
    city: 'Moscow',
    username: 'haer',
};

describe('validateProfileDate.test', () => {
    test('success', async () => {
        const result = validateProfileDate(data);

        expect(result).toEqual([]);
    });

    test('without last name and first name', async () => {
        const result = validateProfileDate({ ...data, lastname: '', first: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('without username', async () => {
        const result = validateProfileDate({ ...data, username: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_NAME]);
    });

    test('without age', async () => {
        const result = validateProfileDate({ ...data, age: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('without country', async () => {
        const result = validateProfileDate({ ...data, country: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('incorrect all', async () => {
        const result = validateProfileDate({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_USER_NAME,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
