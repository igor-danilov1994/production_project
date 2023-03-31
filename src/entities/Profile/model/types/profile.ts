import { Country, Currency } from 'shared/const/common';
import { ValidateProfileError } from 'entities/Profile/model/services/validateProfileDate/validateProfileDate';

export interface Profile {
    first?: string,
    lastname?: string,
    age?: number,
    currency?: Currency,
    country?: Country,
    city?: string,
    username?: string,
    avatar?: string
}

export interface ProfileSchema {
    profile?: Profile;
    form?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    validateError?: ValidateProfileError[]
}
