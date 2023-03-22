import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { Profile, ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    profile: undefined,
    error: undefined,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        canceledEdit: (state) => {
            state.form = state.profile;
            state.readonly = true;
        },
        onSaveProfile: (state) => {
            state.profile = state.form;
            state.readonly = true;
        },
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (state, action) => {
                state.error = '';
                state.isLoading = false;
                state.profile = action.payload;
                state.form = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state) => {
                state.error = 'error';
                state.isLoading = false;
            })

            // updateProfileData
            .addCase(updateProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(updateProfileData.fulfilled, (state, action) => {
                state.error = '';
                state.isLoading = false;
                state.profile = action.payload;
                state.form = action.payload;
                state.readonly = true;
            })
            .addCase(updateProfileData.rejected, (state) => {
                state.error = 'error';
                state.isLoading = false;
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
