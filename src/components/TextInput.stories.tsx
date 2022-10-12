import { Meta, StoryObj } from '@storybook/react';
import { TextInput, TextInputInputProps, TextInputRootProps } from './TextInput';
import { Envelope } from 'phosphor-react';

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope size={18} />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Type your e-mail" />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};
export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput.Input placeholder="Type your e-mail" />,
  },
};
