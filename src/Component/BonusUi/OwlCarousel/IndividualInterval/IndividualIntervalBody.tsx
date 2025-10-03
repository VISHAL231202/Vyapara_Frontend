/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Carousel, CarouselControl, CarouselItem } from "reactstrap";
import { Image } from "../../../../AbstractElements";
import { itemIntervalDataList } from "../../../../Data/BonusUi/OwlCarousel/OwlCarousel";
import { dynamicImage } from "../../../../Service";

const IndividualIntervalBody = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const next = () => {
    if (activeIndex === itemIntervalDataList.length - 1) setActiveIndex(0);
    else setActiveIndex(activeIndex + 1);
  };

  const previous = () => {
    if (activeIndex === 0) setActiveIndex(itemIntervalDataList.length - 1);
    else setActiveIndex(activeIndex - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, itemIntervalDataList[activeIndex].interval);
    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);
  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      {itemIntervalDataList.map((item, index) => (
        <CarouselItem key={index}>
          <Image src={dynamicImage(`${item.image}`)} alt="Slide"/>
        </CarouselItem>
      ))}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous}/>
      <CarouselControl direction="next" directionText="Next" onClickHandler={next}/>
    </Carousel>
  );
};

export default IndividualIntervalBody;
