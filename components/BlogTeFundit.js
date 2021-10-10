import React from "react";
import Home from "../pages";
export const BlogTeFundit = ({ data, sectionTitle }) => {
  return (
    <div className="w-1/4 ">
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 uppercase sm:text-4xl sm:leading-none">
        {sectionTitle}
      </h2>
      <div className="relative flex items-start h-auto">
        <div className="mb-10 border-t border-b divide-y">
          {data.map((article, i) => (
            <div key={i} className="grid py-4 hover:bg-gray-100 sm:grid-cols-3">
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
                <div className="mb-3">
                  <a
                    href="/"
                    aria-label="Article"
                    className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                  >
                    <p className="text-lg leading-none ">{article.title}</p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
