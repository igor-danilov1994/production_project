import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import './Loader.scss';

interface PageLoaderProps {
    className?: string
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => (
    <div className={classNames('PageLoader', {}, [className])}>
        <Loader />
    </div>
);
