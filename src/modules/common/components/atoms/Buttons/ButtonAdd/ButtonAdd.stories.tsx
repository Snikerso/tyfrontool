import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ButtonAdd, ButtonAddProps } from './ButtonAdd';

export default {
  title: 'Atoms/Buttons/ButtonAdd',
  component: ButtonAdd,
  argTypes: {
    onClick: {
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

const Atoms: Story<ButtonAddProps> = (args: ButtonAddProps) => (
  <ButtonAdd {...args} />
);

export const Primary = Atoms.bind({});

Primary.args = {
  text: 'Dodaj słówko',
};
