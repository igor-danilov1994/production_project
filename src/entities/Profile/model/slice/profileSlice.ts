import { createSlice } from '@reduxjs/toolkit';

import { fetchProfileData, ProfileSchema } from 'entities/Profile';

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
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (state, action) => {
                state.error = '';
                state.isLoading = false;
                state.profile = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.error = 'error';
                state.isLoading = false;
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
