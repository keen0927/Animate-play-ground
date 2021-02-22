import { Meta } from '@storybook/react/types-6-0';
import HeroSwiper from './index';

export default {
  title: '컴포넌트/테스트',
  component: HeroSwiper
} as Meta;

const Template = () => <HeroSwiper />;

export const ddd = Template.bind({});
