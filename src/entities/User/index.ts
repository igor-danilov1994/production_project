import { getUser } from './model/selectors/getUser/getUser';
import { userActions, userReducer } from './model/slice/userSlice';
import { User, UserSchema } from './model/types/user';

export {
    userReducer,
    userActions,
};

export {
    UserSchema,
    User,
};
export {
    getUser,
};
