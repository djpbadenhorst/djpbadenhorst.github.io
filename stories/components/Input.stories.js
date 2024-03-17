import { Input } from '../../src/components/Input';

export default {
  title: 'Example/Input',
  component: Input,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {},
};

export const Text = {
  args: { type: 'text', placeholder: "Placeholder Here" },
};

export const Password = {
  args: { type: 'password', placeholder: "Password Here" },
};
