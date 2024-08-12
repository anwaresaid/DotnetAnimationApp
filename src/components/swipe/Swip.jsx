import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import SwipeCard from "../cards/SwipeCard";

function Swip() {
  const [randomCirclePositions, setRandomCirclePositions] = useState([]);
  const [randomCircleFinalPositions, setRandomCircleFinalPositions] = useState(
    []
  );

  useEffect(() => {
    const randomCirclePositions = Array.from({ length: 10 }, () => {
      return {
        x: Math.random() * (1300 - 50) + 50,
        y: Math.random() * (200 - 50) + 50,
      };
    });
    const randomCircleFinalPositions = Array.from({ length: 10 }, () => {
      return {
        x: Math.random() * (1300 - 50) + 50,
        y: Math.random() * (180 - 20) + 20,
      };
    });

    setRandomCircleFinalPositions(randomCircleFinalPositions);
    setRandomCirclePositions(randomCirclePositions);
  }, []);

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Keyboard, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide className="first-slide">
        <h2 className="title"> WHAT ARE WE TALKING ABOUT ?</h2>
        <svg
          height="300"
          width="1400"
          xmlns="http://www.dotnet.com"
          className="absolute"
        >
          {randomCirclePositions.map((circle, index) => (
            <circle
              key={index}
              r="10.375"
              cx={circle.x}
              cy={circle.y}
              stroke="#0E0E0E"
              stroke-width="1.25"
              fill="#fef7e6"
            />
          ))}
        </svg>
      </SwiperSlide>
      <SwiperSlide>
        <div className="text-center w-full h-full">
          <SwipeCard />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <SwipeCard />
      </SwiperSlide>
      <SwiperSlide className="first-slide">
        <h2 className="title"> ONLY THE BEST</h2>
        <svg
          height="300"
          width="1000"
          xmlns="http://www.dotnet.com"
          className="absolute"
        >
          {randomCircleFinalPositions.map((circle, index) => (
            <circle
              key={index}
              r="10.375"
              cx={circle.x}
              cy={circle.y}
              stroke="#0E0E0E"
              stroke-width="1.25"
              fill="#fef7e6"
            />
          ))}
        </svg>
      </SwiperSlide>
    </Swiper>
  );
}

export default Swip;
