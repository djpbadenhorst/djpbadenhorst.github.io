import { Button } from '../../src/components/Button';

export default {
  title: 'Example/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {},
};

export const Default = {
  args: { label: "Default", className:"w-40" },
};
export const Secondary = {
  args: { mode: 'secondary', label: "Secondary", className:"w-40" },
};
export const Accent = {
  args: { mode: 'accent', label: "Accent", className:"w-40" },
};
