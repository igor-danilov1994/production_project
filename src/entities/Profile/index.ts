import { getProfile } from './model/selectors/getProfile/getProfile';
import { getProfileError } from './model/selectors/getProfileError/getProfileError';
import { getProfileLoading } from './model/selectors/getProfileLoading/getProfileLoading';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { updateProfileData } from './model/services/updateProfileData/updateProfileData';

import { profileActions, profileReducer } from './model/slice/profileSlice';
import { Profile, ProfileSchema } from './model/types/profile';
import { ProfileCard } from './ui/ProfileCard/ProfileCard';

export {
    Profile,
    ProfileSchema,
};

export {
    fetchProfileData,
    updateProfileData,
};

export {
    profileReducer,
    profileActions,
    ProfileCard,
};

export {
    getProfile,
    getProfileLoading,
    getProfileError,
};
