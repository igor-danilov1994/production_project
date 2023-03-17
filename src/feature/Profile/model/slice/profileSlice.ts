import { createSlice } from '@reduxjs/toolkit';

import { ProfileSchema } from 'feature/Profile';

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    profile: undefined,
    error: undefined,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
