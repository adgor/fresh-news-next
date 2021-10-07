import React, { useRef, useState } from "react";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Home from "../../pages";
// import MoviePage from "../pages/[movieId]";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/navigation";
// import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";
import ResponsiveSliderSingle from "./ResponsiveSliderSingle";

// install Swiper modules
SwiperCore.use([Navigation]);

export default function ResponsiveSlider({ data, href }) {
  return (
    <>
      <div className="relative mx-auto mb-6 sm:mb-0">
        <div className="text-center sm:text-left"></div>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {data.map((article, i) => (
            <SwiperSlide key={i}>
              <ResponsiveSliderSingle
                href={article.title}
                img={article.imgLink}
                category={article.category}
                title={article.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <span className="absolute w-full border-b border-gray-300 border-opacity-10"></span>
      </div>
    </>
  );
}
