import type { Meta, StoryObj } from '@storybook/react';

import { Button, type ButtonProps } from './button';

const meta = {
  title: 'Pixel Components / Button',
  decorators: [
    Story => (
      <div className='w-80 h-24 border border-white p-2'>
        <Story />
      </div>
    ),
  ],
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<ButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Hello World',
    disabled: false,
    onClick: () => console.log('Hello World'),
    variant: 'primary',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Hello World',
    disabled: true,
    onClick: () => console.log('Hello World'),
  },
};

export const Secondary: Story = {
  args: {
    children: 'Hello World',
    onClick: () => console.log('Hello World'),
    variant: 'secondary',
  },
};

export const Special: Story = {
  args: {
    children: 'Hello World',
    onClick: () => console.log('Hello World'),
    variant: 'special',
  },
};
