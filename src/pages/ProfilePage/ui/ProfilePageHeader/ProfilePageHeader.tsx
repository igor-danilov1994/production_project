import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { profileActions, updateProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
    readonly?: boolean;
    isLoading: boolean;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = memo((props) => {
    const { className, readonly, isLoading } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.canceledEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} />
            {readonly ? (
                <Button onClick={onEdit} className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
                    {t('Редактировать')}
                </Button>
            ) : (
                <div className={cls.btn_group}>
                    <Button onClick={onCancelEdit} className={cls.editBtn} theme={ButtonTheme.OUTLINE_RED}>
                        {t('Отменить')}
                    </Button>
                    <Button disabled={isLoading} onClick={onSave} className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
                        {t('Сохранить')}
                    </Button>
                </div>
            )}
        </div>
    );
});
