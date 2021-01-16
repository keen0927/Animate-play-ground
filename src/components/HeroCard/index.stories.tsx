import { Meta } from '@storybook/react/types-6-0';
import styled from '@emotion/styled';

export default {
  title: 'Animation/Hero_Swiper'
} as Meta;

const Emotion = {
  Wrapper: styled.section`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: minmax(100px, auto);
    grid-template-areas:
      'hd hd hd hd hd'
      'sd sd main main main'
      'sd sd ft ft ft';
    border: 1px solid red;
  `,
  Header: styled.header`
    grid-area: hd;
    background: pink;

    h1 {
      border: 2px solid blue;
    }
  `,
  Side: styled.article`
    grid-area: sd;
    background: skyblue;
  `,
  Main: styled.article`
    grid-area: main;
    background: plum;
  `,
  Footer: styled.footer`
    grid-area: ft;
    background: yellowgreen;
  `
};

const Template = () => (
  <Emotion.Wrapper>
    <Emotion.Header>
      이모션 헤더
      <h1>ㅋㅋㅋ</h1>
    </Emotion.Header>
    <Emotion.Side>이모션 사이드</Emotion.Side>
    <Emotion.Main>이모션 사이드</Emotion.Main>
    <Emotion.Footer>이모션 사이드</Emotion.Footer>
  </Emotion.Wrapper>
);
export const Default = Template.bind({});
