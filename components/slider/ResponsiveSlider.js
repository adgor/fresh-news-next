import React, { useRef, useState } from "react";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Hero from "../Hero";
// import MoviePage from "../pages/[movieId]";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";
import ResponsiveSliderSingle from "./ResponsiveSliderSingle";

// install Swiper modules
SwiperCore.use([EffectFade, Navigation, Pagination]);

export default function ResponsiveSlider({ data, href }) {
  return (
    <>
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
    </>
  );
}
