import { Profile } from 'entities/Profile';

export enum ValidateProfileError {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_USER_NAME = 'INCORRECT_USER_NAME',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    NOT_DATA = 'NOT_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
}

// eslint-disable-next-line consistent-return
export const validateProfileDate = (profile?: Profile) => {
    const errors: ValidateProfileError[] = [];

    if (!profile) {
        return [ValidateProfileError.NOT_DATA];
    }

    const {
        lastname, username, country, age, first,
    } = profile;

    if (!first || !lastname) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }
    if (!username) {
        errors.push(ValidateProfileError.INCORRECT_USER_NAME);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }

    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }

    return errors;
};
