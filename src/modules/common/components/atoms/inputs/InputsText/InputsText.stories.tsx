import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { InputText, InputTextProps } from './InputsText';

export default {
  title: 'Atoms/Inputs/InputText',
  component: InputText,
  argTypes: {
    props: {
      table: {
        disable: true,
      },
    },
    ref: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Atoms: Story<InputTextProps> = (args: InputTextProps) => (
  <InputText {...args} />
);

export const Primary = Atoms.bind({});

Primary.args = {
  value: 'Reinforcement Learning',
};
