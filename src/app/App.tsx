import { FC } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import './styles/index.scss';

export const App: FC = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {},[theme])}>
            <Navbar />
            <AppRouter />
        </div>
    );
};
//rsc
//rc
