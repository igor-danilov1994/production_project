import { LoginSchema } from 'feature/AuthByUsername';
import { loginActions, loginReducer } from 'feature/AuthByUsername/model/slice/loginSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'username' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('username'),
        ))
            .toEqual({ username: 'username' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: 'password' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('password'),
        ))
            .toEqual({ password: 'password' });
    });
});
