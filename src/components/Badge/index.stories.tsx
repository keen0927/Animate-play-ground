import { Story, Meta } from '@storybook/react/types-6-0';

import Badge from './index';

export default {
  title: '컴포넌트/뱃지',
  components: Badge
} as Meta;

const Template = () => <Badge />;

export const 뱃지 = Template.bind({});
