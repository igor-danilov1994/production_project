import React from 'react';
import { RoutsPath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export interface SidebarItemType {
    path: string; // RoutsPath
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemList: SidebarItemType[] = [
    {
        path: RoutsPath.main,
        text: 'Главная',
        Icon: MainIcon,
    },
    {
        path: RoutsPath.about,
        text: 'О сайте',
        Icon: AboutIcon,
    },
    {
        path: RoutsPath.profile,
        text: 'Профиль',
        Icon: ProfileIcon,
        authOnly: true,
    },
];
