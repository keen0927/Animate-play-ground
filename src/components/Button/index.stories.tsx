import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { ButtonProps } from './index';

export default {
  title: '컴포넌트/버튼',
  components: Button,
  args: {
    label: '버튼'
  }
} as Meta;

const Template: Story<ButtonProps> = (props) => <Button {...props} />;

export const 버튼 = Template.bind({});
