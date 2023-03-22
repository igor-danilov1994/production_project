import {
    CSSProperties, FC, memo, useMemo,
} from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    avatar?: string;
    size?: string;
}

export const Avatar: FC<AvatarProps> = memo(({ className, avatar, size }) => {
    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);

    return (
        <img
            style={styles}
            className={
                classNames(cls.Avatar, {}, [className])
            }
            src={avatar}
            alt="avatar"
        />
    );
});
