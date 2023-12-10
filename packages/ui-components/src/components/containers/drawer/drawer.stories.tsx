import type { Meta, StoryObj } from '@storybook/react';

import { Drawer, DrawerProps } from './drawer';

const meta = {
  title: 'Components / Containers / Drawer',
  decorators: [
    Story => (
      <div className='min-h-[400px] h-full w-full bg-yellow-50 flex mt-1'>
        <Story />
      </div>
    ),
  ],
  component: Drawer,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<DrawerProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => {
    const handleClick = (id: string) => {
      console.log('clicked on', id);
    };

    return (
      <Drawer>
        <Drawer.Item onClick={handleClick} id='home'>
          Home
        </Drawer.Item>
        <Drawer.Item onClick={handleClick} id='love-letter'>
          Love Letter
        </Drawer.Item>
        <Drawer.Item onClick={handleClick} id='pirates-dice'>
          Pirates Dice
        </Drawer.Item>
      </Drawer>
    );
  },
};
