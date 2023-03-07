import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface loginByUserNameProps {
    username: string,
    password: string
}

export const loginByUsername = createAsyncThunk<User, loginByUserNameProps>(
    'login/loginByUsername',
    async (authData, thankApi) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData);

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thankApi.dispatch(userActions.setUserData(response.data));

            return response.data;
        } catch (e) {
            return thankApi.rejectWithValue('error');
        }
    },
);
