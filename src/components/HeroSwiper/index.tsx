import * as React from 'react';
import * as Styled from './style';

const HeroSwiper = () => {
  const [currentIndex, setCurrentIndex] = React.useState(1);

  return (
    <Styled.Swiper>
      <Styled.BadgeSmall activeIndex={currentIndex}>
        <i>1</i>
        <i>2</i>
        <i>3</i>
        <i>4</i>
        <i>5</i>
        <i>6</i>
        <i>7</i>
        <i>8</i>
        <i>9</i>
      </Styled.BadgeSmall>
    </Styled.Swiper>
  );
};

export default HeroSwiper;
