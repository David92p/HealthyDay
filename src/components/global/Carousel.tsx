
import React from "react";
import Slider from "react-slick"
import { Card } from ".";
import type { CardType } from ".";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export type CardsCarousel = {
  cards: CardType[];
}

const Carousel: React.FC<CardsCarousel> = ({ cards }) => {
  const settings = {
    speed: 500,
    slidesToShow: cards.length >= 3 ? 3 : cards.length,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: cards.length >= 2 ? 2 : cards.length,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (  
    <div className="w-3/4 m-auto mb-4">
      <Slider {...settings}>
          {
            cards.map((card) => {
              return <Card {...card} key={card.id}/>
            })
          }
        </Slider>
    </div>
  )
};

export default Carousel;