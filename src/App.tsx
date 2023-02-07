import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";

import { Counter } from "./components/Counter";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { useTheme } from "./theme/useTheme";
import './styles/index.scss';

export const App = () => {
    const { theme, onToggleTheme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={onToggleTheme}>Toggle theme</button>
            <Link to='/' >Главная</Link>
            <Link to='/about' >О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route  path='/about' element={<AboutPageAsync />}/>
                    <Route  path='/' element={<MainPageAsync />}/>
                </Routes>
            </Suspense>
            <Counter />
        </div>
    );
};
//rsc
