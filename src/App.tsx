import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";

import { Counter } from "./components/Counter";
import './index.scss';
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";

export const App = () => {
    return (
        <div className='app'>
            <Link to='/about' >About page</Link>
            <Link to='/' >Main page</Link>
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
