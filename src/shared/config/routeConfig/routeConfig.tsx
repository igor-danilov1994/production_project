import { RouteProps } from "react-router-dom";

import AboutPage from "pages/AboutPage/ui/AboutPage";
import MainPage from "pages/MainPage/ui/MainPage";

export enum AppRouts {
    MAIN = 'main',
    ABOUT = 'about'
}

export const RoutsPath: Record<AppRouts, string> = {
    [AppRouts.MAIN] : '/',
    [AppRouts.ABOUT] : '/about'
}

export const routeConfig: Record<AppRouts, RouteProps> = {
    [AppRouts.MAIN]: {
        path: '/',
        element: <MainPage />
    },
    [AppRouts.ABOUT]: {
        path: '/about',
        element: <AboutPage />
    },
}