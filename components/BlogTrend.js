import Home from "../pages";
import { BlogTeFundit } from "./BlogTeFundit";
export const BlogTrend = ({ trend, teFundit }) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex gap-3">
        <div className="w-3/4 ">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 capitalize sm:text-4xl sm:leading-none">
            {trend[0].category}
          </h2>{" "}
          <div className="grid grid-flow-row grid-cols-3 grid-rows-3 gap-3">
            <div className="relative col-span-3 row-span-2 h-96 ">
              <img
                className="absolute object-cover object-top w-full h-full "
                src={trend[0].imgLink}
                alt=""
              />
              <div className="absolute inset-x-0 bottom-0 px-6 py-8 transition duration-1000 group-hover:opacity-80 group-hover:text-white group-hover:duration-200 bg-gradient-to-t from-gray-900 ">
                <p className="text-xl font-extrabold tracking-wide text-white cursor-pointer ">
                  {trend[0].title}
                </p>
              </div>
            </div>

            <div className="relative h-full group ">
              <img
                className="absolute object-cover object-top w-full h-full "
                src={trend[1].imgLink}
                alt=""
              />
              <div className="absolute inset-x-0 bottom-0 px-6 pt-8 pb-4 transition duration-1000 group-hover:opacity-80 group-hover:text-white group-hover:duration-200 bg-gradient-to-t from-gray-900">
                <p className="text-base font-extrabold tracking-wide text-white cursor-pointer ">
                  {trend[1].title}
                </p>
              </div>
            </div>
            <div className="relative h-full group ">
              <img
                className="absolute object-cover object-top w-full h-full "
                src={trend[2].imgLink}
                alt=""
              />
              <div className="absolute inset-x-0 bottom-0 px-6 pt-8 pb-4 transition duration-1000 group-hover:opacity-80 group-hover:text-white group-hover:duration-200 bg-gradient-to-t from-gray-900">
                <p className="text-base font-extrabold tracking-wide text-white cursor-pointer ">
                  {trend[2].title}
                </p>
              </div>
            </div>
            <div className="relative h-full group ">
              <img
                className="absolute object-cover object-top w-full h-full "
                src={trend[3].imgLink}
                alt=""
              />
              <div className="absolute inset-x-0 bottom-0 px-6 pt-8 pb-4 transition duration-1000 group-hover:opacity-80 group-hover:text-white group-hover:duration-200 bg-gradient-to-t from-gray-900">
                <p className="text-base font-extrabold tracking-wide text-white cursor-pointer ">
                  {trend[3].title}
                </p>
              </div>
            </div>
          </div>
        </div>

        <BlogTeFundit data={teFundit} sectionTitle="të fundit" />
      </div>
    </div>
  );
};
