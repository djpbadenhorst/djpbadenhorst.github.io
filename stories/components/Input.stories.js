import { Input } from '../../src/components/Input';

export default {
  title: 'Example/Input',
  component: Input,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {},
};

export const Text = {
  args: { type: 'text', label: "Email" },
};

export const Password = {
  args: { type: 'password', label: "Password" },
};
