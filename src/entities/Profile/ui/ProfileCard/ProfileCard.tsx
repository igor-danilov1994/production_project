import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { getProfile } from 'entities/Profile/model/selectors/getProfile/getProfile';
import { getProfileLoading } from 'entities/Profile/model/selectors/getProfileLoading/getProfileLoading';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string
}

export const ProfileCard: FC<ProfileCardProps> = memo(({ className }) => {
    const { t } = useTranslation('profile');
    const profile = useSelector(getProfile);
    const isLoading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Профиль')} />
                <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={profile?.first}
                    className={cls.input}
                />
                <Input
                    value={profile?.lastname}
                    className={cls.input}
                />
            </div>
        </div>
    );
});
