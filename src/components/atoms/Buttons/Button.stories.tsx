import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TocToc-DS/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const TocToc = Template.bind({});
TocToc.args = {
  label: 'Button',
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  label: 'Hello TocToc',
};