import styled from '@emotion/styled';

export const Swiper = styled.section`
  position: relative;
  border: 1px solid pink;
  height: 300px;
`;

interface BadgeSmallProps {
  activeIndex: number;
}

export const BadgeSmall = styled.div<BadgeSmallProps>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 30;

  i {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    border: 1px solid #000;

    &:nth-of-type(${(props) => props.activeIndex + 1}) {
      will-change: transform;
      transform: rotate(360deg);
      transition: 1s ease-out;
    }
  }
`;
