import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Country, Currency } from 'shared/const/common';
import avatar from 'shared/assets/test/forStorybook.jpg';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    profile: {
        first: 'string',
        lastname: 'string',
        age: 30,
        currency: Currency.USD,
        country: Country.Russia,
        city: 'Moscow',
        username: 'haer',
        avatar,
    },
};

export const withError = Template.bind({});
withError.args = {
    error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
