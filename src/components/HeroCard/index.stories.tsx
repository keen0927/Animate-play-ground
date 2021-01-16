import { Meta } from '@storybook/react/types-6-0';
import styled from '@emotion/styled';

export default {
  title: 'Animation/Hero_Swiper'
} as Meta;

const HeroCardBlock = styled.section`
  border: 1px solid red;
`;

const Template = () => <HeroCardBlock>123</HeroCardBlock>;
export const Default = Template.bind({});
