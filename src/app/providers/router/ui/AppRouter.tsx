import {
    FC, memo, Suspense, useMemo,
} from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from 'shared/config';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { useSelector } from 'react-redux';
import { getUser } from 'entities/User';

const AppRouter: FC = () => {
    const isAuth = useSelector(getUser);

    const routes = useMemo(() => Object.values(routeConfig).filter((route) => !(route.authOnly && !isAuth)), [isAuth]);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routes.map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <Suspense fallback={<PageLoader />}>
                                <div className="page-wrapper">
                                    {element}
                                </div>
                            </Suspense>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default memo(AppRouter);
