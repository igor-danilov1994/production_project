import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = memo(({ className, short }) => {
    const { t, i18n } = useTranslation();

    const onToggleLang = async () => {
        const currentLag = i18n.language === 'ru' ? 'en' : 'ru';

        i18n.changeLanguage(currentLag);
    };

    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={onToggleLang}
        >
            {t(short ? 'Короткий язык' : 'Язык')}
        </Button>
    );
});
