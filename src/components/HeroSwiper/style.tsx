import styled from '@emotion/styled';

export const Swiper = styled.section`
  position: relative;
  border: 1px solid pink;
  height: 300px;
`;

interface StyleProps {
  activeIndex?: number;
  backgroundColor?: string;
  key?: number;
}

export const BadgeSmallWrap = styled.div<StyleProps>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 30;
`;

export const BadgeSmall = styled.i<StyleProps>`
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  border: 1px solid #000;
  background: ${(props) => props.backgroundColor};
  opacity: 0;
  transition: opacity 0.36s, transform 1s;
  will-change: opacity;

  &:nth-of-type(${(props) => props.activeIndex}) {
    opacity: 1;
    transform: rotate(360deg);
  }
`;

export const ButtonTest = styled.button`
  position: absolute;
  bottom: 0;
  border: 1px solid #000;
`;
