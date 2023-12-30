import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import { INVITE_STATUS } from '../../utils/const';
import avatar from './avatar-05.png';

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

export const Image: Story = {
  args: {
    source: avatar,
  }
}

export const SantaHat: Story = {
  args: {
    source: avatar,
    isSanta: true,
  }
}
