import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { InputSelect, InputSelectProps } from './InputsSelect';

export default {
  title: 'Atoms/Inputs/InputSelect',
  component: InputSelect,
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

const Select: Story<InputSelectProps> = (args: InputSelectProps) => (
  <InputSelect {...args} />
);

export const Primary = Select.bind({});

Primary.args = {
  options: [{ id: 1, basename: 'dsadsa' }],
};
