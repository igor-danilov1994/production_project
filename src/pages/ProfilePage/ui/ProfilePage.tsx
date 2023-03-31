import { FC, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModelLoader, ReducersList } from 'shared/lib/compoents/DynamicModelLoader/DynamicModelLoader';
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileLoading,
    getProfileReadonly,
    getValidateProfileError,
    profileActions,
    ProfileCard,
    profileReducer,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './ProfilePage.module.scss';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

interface ProfilePageProps {
    className?: string
}

const initialReducer: ReducersList = {
    profile: profileReducer,
};

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
    const dispatch = useAppDispatch();
    const profile = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getValidateProfileError);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData());
        }
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
                {validateErrors?.map((error) => (
                    <Text key={error} theme={TextTheme.ERROR} text={error} />
                ))}
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
