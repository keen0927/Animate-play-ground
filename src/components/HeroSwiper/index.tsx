import * as React from 'react';
import './style.scss';

// const BadgesSmallMock = [
//   {
//     backgroundColor: 'red'
//   },
//   {
//     backgroundColor: 'skyblue'
//   },
//   {
//     backgroundColor: 'pink'
//   },
//   {
//     backgroundColor: 'purple'
//   }
// ];

const HeroSwiper = () => {
  // const [currentIndex, setCurrentIndex] = React.useState(1);
  const [touchStartPosX, setTouchStartPosX] = React.useState<number | null>(null);

  const swiperTerm = 30;

  const saveTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const result = Math.floor(e.targetTouches[0].clientX);
    setTouchStartPosX(result);
  };

  const saveTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchEndPosX = Math.floor(e.changedTouches[0].clientX);
    const getMoveTerm = Math.abs(touchStartPosX! - touchEndPosX);

    if (swiperTerm > getMoveTerm) {
      return null;
    }

    const direction = touchStartPosX! > touchEndPosX ? '왼쪽스와이프' : '오른쪽스와이프';
    console.log('스와이프 방향 : ', direction);
  };

  return (
    <>
      <div className="swiper-wrap" onTouchStart={saveTouchStart} onTouchEnd={saveTouchEnd}>
        DIV
      </div>
    </>
  );
};

export default HeroSwiper;
