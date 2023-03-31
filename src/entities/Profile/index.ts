import { getProfile } from './model/selectors/getProfile/getProfile';
import { getProfileError } from './model/selectors/getProfileError/getProfileError';
import { getProfileForm } from './model/selectors/getProfileForm/getProfileForm';
import { getProfileLoading } from './model/selectors/getProfileLoading/getProfileLoading';
import { getProfileReadonly } from './model/selectors/getProfileReadonly/getProfileReadonly';
import { getValidateProfileError } from './model/selectors/getValidateProfileError/getValidateProfileError';
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
    getValidateProfileError,
    getProfileReadonly,
    getProfileForm,
};
