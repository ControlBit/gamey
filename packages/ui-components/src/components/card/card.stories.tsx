import type { Meta, StoryObj } from '@storybook/react';

import { Card, type CardProps } from './card';

const meta = {
  title: 'Pixel Components / Card',
  decorators: [
    Story => (
      <div className='w-80 h-24 border p-2'>
        <Story />
      </div>
    ),
  ],
  component: Card,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<CardProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    children: 'Hello World',
  },
};
