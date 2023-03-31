import { ComponentMeta, ComponentStory } from '@storybook/react';
import AvatarForStorybook from '../../assets/test/forStorybook.jpg';

import { Avatar } from './Avatar';

export default {
    title: 'ui/Avatar',
    component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    avatar: AvatarForStorybook,
    size: '50px',
};
