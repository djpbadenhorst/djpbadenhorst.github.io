import { Button } from '../../src/components/Button';

export default {
  title: 'Example/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {},
};

export const Default = {
  args: { label: "Default" },
};
export const Secondary = {
  args: { label: "Secondary", mode: 'secondary' },
};
export const Accent = {
  args: { label: "Accent", mode: 'accent' },
};
