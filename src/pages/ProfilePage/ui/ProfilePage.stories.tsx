import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country, Currency } from 'shared/const/common';
import avatar from 'shared/assets/test/forStorybook.jpg';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ProfilePage from './ProfilePage';

export default {
    title: 'page/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    profile: {
        form: {
            first: 'string',
            lastname: 'string',
            age: 30,
            currency: Currency.USD,
            country: Country.Russia,
            city: 'Moscow',
            username: 'haer',
            avatar,
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            first: 'string',
            lastname: 'string',
            age: 30,
            currency: Currency.USD,
            country: Country.Russia,
            city: 'Moscow',
            username: 'haer',
            avatar,
        },
    },
})];
