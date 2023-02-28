import { FC, useMemo, useState } from 'react';

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

const themeDefault = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme ?? Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?: Theme
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
    const [theme, setTheme] = useState(initialTheme || themeDefault);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
