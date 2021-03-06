import React from "react";
import Image from "next/image";
import Link from "next/link";

function ResponsiveSliderSingle({ href, title, img, category }) {
  return (
    <div className="group">
      <img
        className="object-cover object-top w-full h-56 md:h-64 xl:h-96"
        src={img}
        alt=""
      />
      <div className="absolute inset-x-0 bottom-0 px-6 py-8 transition duration-1000 group-hover:opacity-80 group-hover:text-white group-hover:duration-200 bg-gradient-to-t from-gray-900 ">
        <p className="text-xl font-extrabold tracking-wide text-white cursor-pointer ">
          {title}
        </p>
      </div>
    </div>

    //     <div className="w-auto h-auto overflow-hidden transition-shadow duration-300 rounded">
    //       <div className="transition duration-500 ease-in-out transform rounded hover:-translate-y-1 hover:scale-110">
    //         <Link href={href}>
    //           <a>
    //             <img
    //               src={img}
    //               //   width="228"
    //               //   height="330"
    //               //   className="w-full rounded "
    //             />
    //           </a>
    //         </Link>
    //         <div className="">
    //           <div className="flex flex-col ">
    //             <Link href={href}>
    //               <a>
    //                 <p className="text-sm font-bold leading-6 tracking-wider truncate transition duration-700 whitespace-nowrap hover:text-transparent bg-clip-text bg-gradient-to-tl hover:from-blue-700 hover:via-red-700 hover:to-yellow-500">
    //                   {title}
    //                 </p>
    //               </a>
    //             </Link>
    //             <div className="flex flex-row justify-between mb-1 text-xs font-normal leading-4 tracking-wider text-white opacity-50">
    //               <div className="flex"></div>
    //               <p>{category}</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
  );
}

export default ResponsiveSliderSingle;
