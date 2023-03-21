import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModelLoader, ReducersList } from 'shared/lib/compoents/DynamicModelLoader/DynamicModelLoader';
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string
}

const initialReducer: ReducersList = {
    profile: profileReducer,
};

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModelLoader reducers={initialReducer} removeAfterUnmount>
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                <ProfileCard />
            </div>
        </DynamicModelLoader>
    );
};

export default ProfilePage;
