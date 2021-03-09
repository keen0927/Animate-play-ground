import { Story, Meta } from '@storybook/react/types-6-0';

import Input from './index';

export default {
  title: '컴포넌트/인풋',
  components: Input
} as Meta;

const Template = () => <Input />;

export const 인풋 = Template.bind({});
