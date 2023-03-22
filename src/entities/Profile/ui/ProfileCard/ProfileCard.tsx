import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    profile?: Profile;
    isLoading?: boolean;
    readonly?: boolean;
    error?: string;
    onChangeFirstName?: (value: string) => void;
    onChangeLastName?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeUserName?: (value: string) => void;
}

export const ProfileCard: FC<ProfileCardProps> = memo((props) => {
    const {
        className,
        profile,
        isLoading,
        error,
        onChangeFirstName,
        onChangeLastName,
        onChangeAge,
        onChangeAvatar,
        onChangeCity,
        onChangeUserName,
        readonly,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, { [cls.loading]: isLoading }, [className])}>
                <Loader />
            </div>
        );
    }
    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Ошибка')}
                    text={t('Перезагрузите страницу')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.data}>
                {profile?.avatar && (
                    <Avatar size="100px" className={cls.avatar} avatar={profile?.avatar} />
                )}
                <Input
                    value={profile?.first}
                    className={cls.input}
                    onChange={onChangeFirstName}
                    readonly={readonly}
                    placeholder={t('Ваше имя')}
                    label={t('Ваше имя')}
                />
                <Input
                    value={profile?.lastname}
                    className={cls.input}
                    onChange={onChangeLastName}
                    readonly={readonly}
                    placeholder={t('Ваша фамилия')}
                    label={t('Ваша фамилия')}
                />
                <Input
                    value={`${profile?.age}`}
                    className={cls.input}
                    onChange={onChangeAge}
                    readonly={readonly}
                    placeholder={t('Ваш возраст')}
                    label={t('Ваш возраст')}
                    type="number"
                />
                <Input
                    value={profile?.city}
                    className={cls.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                    placeholder={t('Ваш город')}
                    label={t('Ваш город')}
                />
                <Input
                    value={profile?.avatar}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                    placeholder={t('Ввелите ссылку на аватар')}
                    label={t('Ввелите ссылку на аватар')}
                />
                <Input
                    value={profile?.username}
                    className={cls.input}
                    onChange={onChangeUserName}
                    readonly={readonly}
                    placeholder={t('Ваш ник')}
                    label={t('Ваш ник')}
                />
            </div>
        </div>
    );
});
