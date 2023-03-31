import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';
import {
    validateProfileDate,
    ValidateProfileError,
} from 'entities/Profile/model/services/validateProfileDate/validateProfileDate';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;

        const profile = getProfileForm(getState());

        const errors = validateProfileDate(profile);

        if (errors.length) {
            return rejectWithValue(errors);
        }

        try {
            const { data } = await extra.api.put<Profile>('/profile', profile);

            if (!data) {
                throw new Error();
            }

            return data;
        } catch (e) {
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    },
);
