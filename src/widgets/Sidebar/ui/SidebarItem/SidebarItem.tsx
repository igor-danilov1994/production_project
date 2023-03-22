import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUser } from 'entities/User';
import { SidebarItemType } from '../model/item';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = memo((props) => {
    const { item, collapsed } = props;
    const { path, Icon, text } = item;
    const { t } = useTranslation();
    const isAuth = useSelector(getUser);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <Icon className={cls.icon} />
            <span className={cls.link}>
                {t(`${text}`)}
            </span>
        </AppLink>
    );
});
