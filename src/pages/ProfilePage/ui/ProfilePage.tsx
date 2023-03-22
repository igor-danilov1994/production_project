import { FC, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModelLoader, ReducersList } from 'shared/lib/compoents/DynamicModelLoader/DynamicModelLoader';
import {
    fetchProfileData,
    getProfileError,
    getProfileLoading,
    profileActions,
    ProfileCard,
    profileReducer,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getProfileReadonly } from 'entities/Profile/model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm';
import cls from './ProfilePage.module.scss';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

interface ProfilePageProps {
    className?: string
}

const initialReducer: ReducersList = {
    profile: profileReducer,
};

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const profile = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const onChangeFirstName = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ first: value ?? '' }));
    }, [dispatch]);

    const onChangeLastName = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ lastname: value ?? '' }));
    }, [dispatch]);

    const onChangeAge = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value) ?? 0 }));
    }, [dispatch]);

    const onChangeCity = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ city: value ?? '' }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ avatar: value ?? '' }));
    }, [dispatch]);

    const onChangeUserName = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ username: value ?? '' }));
    }, [dispatch]);

    return (
        <DynamicModelLoader reducers={initialReducer} removeAfterUnmount>
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                <ProfilePageHeader isLoading={isLoading} readonly={readonly} />
                <ProfileCard
                    profile={profile}
                    isLoading={isLoading}
                    error={error}
                    onChangeLastName={onChangeLastName}
                    onChangeFirstName={onChangeFirstName}
                    readonly={readonly}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeAvatar={onChangeAvatar}
                    onChangeUserName={onChangeUserName}
                />
            </div>
        </DynamicModelLoader>
    );
};

export default ProfilePage;
