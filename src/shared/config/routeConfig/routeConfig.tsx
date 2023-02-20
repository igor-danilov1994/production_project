import { RouteProps } from 'react-router-dom';

import AboutPage from 'pages/AboutPage/ui/AboutPage';
import MainPage from 'pages/MainPage/ui/MainPage';
import { NotFoundPage } from 'pages/NotFoudPage';

export enum AppRouts {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found'
}

export const RoutsPath: Record<AppRouts, string> = {
    [AppRouts.MAIN]: '/',
    [AppRouts.ABOUT]: '/about',
    [AppRouts.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRouts, RouteProps> = {
    [AppRouts.MAIN]: {
        path: RoutsPath.main,
        element: <MainPage />,
    },
    [AppRouts.ABOUT]: {
        path: RoutsPath.about,
        element: <AboutPage />,
    },
    [AppRouts.NOT_FOUND]: {
        path: RoutsPath.not_found,
        element: <NotFoundPage />,
    },
};
