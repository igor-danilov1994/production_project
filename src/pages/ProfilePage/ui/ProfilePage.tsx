import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModelLoader, ReducersList } from 'shared/lib/compoents/DynamicModelLoader/DynamicModelLoader';
import { profileReducer } from 'feature/Profile';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string
}

const initialReducer: ReducersList = {
    profile: profileReducer,
};

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <DynamicModelLoader reducers={initialReducer} removeAfterUnmount>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                ProfilePage
            </div>
        </DynamicModelLoader>
    );
};

export default ProfilePage;
