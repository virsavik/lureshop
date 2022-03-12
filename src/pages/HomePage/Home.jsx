import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
  CarouselControl,
  Button,
} from 'reactstrap';

const items = [
  {
    src: 'https://thumbs.dreamstime.com/b/ice-fishing-lure-3014983.jpg',
    header: 'Ice Fishing',
    text: 'Ice fishing is a sport that is played on ice, usually in a small area',
  },
  {
    src: 'https://megafishingtackle.com/wp-content/uploads/2021/03/strmtsj01.jpg',
    header: 'Stream Fishing',
    text: 'Stream fishing is a sport that is played on streams, usually in a small area',
  },
  {
    src: 'https://megafishingtackle.com/wp-content/uploads/2021/03/mobss1805_a.jpg',
    header: 'Ocean Fishing',
    text: 'Ocean fishing is a sport that is played on ocean, usually in a large area',
  },
];

const Home = () => {
  // State for Active index
  const [activeIndex, setActiveIndex] = React.useState(0);

  // State for Animation
  const [animating, setAnimating] = React.useState(false);

  // Sample items for Carousel

  // Items array length
  const itemLength = items.length - 1;

  // Previous button for Carousel
  const previousButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? itemLength : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  // Next button for Carousel
  const nextButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === itemLength ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  // Carousel Item Data
  const carouselItemData = items.map(item => {
    return (
      <CarouselItem
        key={item.src}
        onExited={() => setAnimating(false)}
        onExiting={() => setAnimating(true)}
      >
        <img
          style={{ filter: 'brightness(70%)', width: '100%', maxHeight: '90vh' }}
          src={item.src}
        />
        <CarouselCaption
          captionHeader={item.header}
          captionText={
            <>
              <p>{item.text}</p>
              <Button color="success" size="md">
                Shop now
              </Button>
            </>
          }
        />
      </CarouselItem>
    );
  });

  return (
    <div className="p-3">
      <Carousel previous={previousButton} next={nextButton} activeIndex={activeIndex}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={newIndex => {
            if (animating) return;
            setActiveIndex(newIndex);
          }}
        />
        {carouselItemData}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previousButton}
        />
        <CarouselControl direction="next" directionText="Next" onClickHandler={nextButton} />
      </Carousel>
    </div>
  );
};

export default Home;
