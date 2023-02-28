import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import 'app/styles/index.scss';

export const RouteDecorator = (story: () => Story) => (
    <BrowserRouter>
        {story()}
    </BrowserRouter>
);
