import React from "react";
import Home from "../pages";
export const BlogTeFundit = ({ data, sectionTitle }) => {
  return (
    <div className="relative w-1/4 h-auto overflow-hidden ">
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 capitalize sm:text-4xl sm:leading-none">
        {sectionTitle}
      </h2>
      <div className="relative flex items-start h-auto">
        <div className="border-t border-b divide-y ">
          {data.map((article, i) => (
            <div key={i} className="grid py-3 hover:bg-gray-100 sm:grid-cols-3">
              <div className="mb-4 sm:mb-0">
                <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                  <a
                    href="/"
                    className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    aria-label="Category"
                  >
                    {article.category}
                  </a>
                  <p className="text-gray-600">{article.postDate}</p>
                </div>
              </div>
              <div className="col-span-2 ">
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block text-black transition-colors duration-200 hover:text-purple-700"
                >
                  <p className="text-base leading-none ">{article.title}</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
