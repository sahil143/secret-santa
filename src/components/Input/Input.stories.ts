import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'First Name',
    type: 'text',
    value: "",
  }
};

export const Email: Story = {
  args: {
    label: "Email",
    type: "email",
    value: ""
  }
}

export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
    value: ""
  }
}

