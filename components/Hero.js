import React from "react";

import ResponsiveSlider from "../components/slider/ResponsiveSlider";
import Home from "../pages";

const Hero = ({ articles, kuriozitete, mode, trend, teknologji }) => {
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid grid-flow-row grid-cols-4 gap-3">
        <div className="relative col-span-2 row-span-2 h-96 ">
          <ResponsiveSlider
            data={articles}
            href={"/category/Aksion"}
            categoryTitle={"Aksion"}
          />
        </div>
        <div className="relative h-full overflow-hidden group ">
          <img
            className="absolute object-cover object-top w-full h-full "
            src={mode[0].imgLink}
            alt=""
          />
          <div className="absolute inset-x-0 bottom-0 px-6 pt-8 pb-4 transition duration-1000 group-hover:opacity-80 group-hover:text-white group-hover:duration-200 bg-gradient-to-t from-gray-900">
            <p className="text-base font-extrabold tracking-wide text-white cursor-pointer ">
              {mode[0].title}
            </p>
          </div>
        </div>
        <div className="relative h-full overflow-hidden group ">
          {" "}
          <img
            className="absolute object-cover object-top w-full h-full "
            src={trend[0].imgLink}
            alt=""
          />
          <div className="absolute inset-x-0 bottom-0 px-6 pt-8 pb-4 transition duration-1000 group-hover:opacity-80 group-hover:text-white group-hover:duration-200 bg-gradient-to-t from-gray-900">
            <p className="text-base font-extrabold tracking-wide text-white cursor-pointer ">
              {trend[0].title}
            </p>
          </div>
        </div>
        <div className="relative h-full overflow-hidden group ">
          {" "}
          <img
            className="absolute object-cover object-top w-full h-full "
            src={kuriozitete[0].imgLink}
            alt=""
          />
          <div className="absolute inset-x-0 bottom-0 px-6 pt-8 pb-4 transition duration-1000 group-hover:opacity-80 group-hover:text-white group-hover:duration-200 bg-gradient-to-t from-gray-900">
            <p className="text-base font-extrabold tracking-wide text-white cursor-pointer ">
              {kuriozitete[0].title}
            </p>
          </div>
        </div>
        <div className="relative h-full overflow-hidden group ">
          {" "}
          <img
            className="absolute object-cover object-top w-full h-full "
            src={teknologji[0].imgLink}
            alt=""
          />
          <div className="absolute inset-x-0 bottom-0 px-6 pt-8 pb-4 transition duration-1000 group-hover:opacity-80 group-hover:text-white group-hover:duration-200 bg-gradient-to-t from-gray-900">
            <p className="text-base font-extrabold tracking-wide text-white cursor-pointer ">
              {teknologji[0].title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
