import * as React from 'react';
import * as Styled from './style';

const BadgesSmallMock = [
  {
    backgroundColor: 'red'
  },
  {
    backgroundColor: 'skyblue'
  },
  {
    backgroundColor: 'pink'
  },
  {
    backgroundColor: 'purple'
  }
];

const HeroSwiper = () => {
  const [currentIndex, setCurrentIndex] = React.useState(1);

  return (
    <Styled.Swiper>
      <Styled.BadgeSmallWrap>
        {BadgesSmallMock.map((value, index) => (
          <Styled.BadgeSmall activeIndex={currentIndex} backgroundColor={value.backgroundColor} key={index} />
        ))}
      </Styled.BadgeSmallWrap>
      <Styled.ButtonTest onClick={() => setCurrentIndex(currentIndex + 1)}>+</Styled.ButtonTest>
    </Styled.Swiper>
  );
};

export default HeroSwiper;
