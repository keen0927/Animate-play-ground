import { Story, Meta } from '@storybook/react/types-6-0';

import Title, { TitleProps } from './index';

export default {
  title: '컴포넌트/타이틀',
  components: Title,
  args: {
    label: '타이틀 샘플'
  }
} as Meta;

const Template: Story<TitleProps> = (props) => <Title {...props} />;

export const 타이틀 = Template.bind({});
