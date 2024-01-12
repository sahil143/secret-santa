import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import { INVITE_STATUS } from '../../utils/const';

const meta = {
  title: 'Example/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Initials: Story = {
  args: {
    initials: 'S'
  }
};

export const InviteIcon: Story = {
  args: {
    initials: 'S',
    status: INVITE_STATUS.DECLINED
  }
};

export const SantaHat: Story = {
  args: {
    initials: 'S',
    isSanta: true,
  }
}
