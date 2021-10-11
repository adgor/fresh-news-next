import Home from "../pages";
export const Blog = ({ data, cols }) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 capitalize sm:text-4xl sm:leading-none">
        {data[0].category}
      </h2>

      <div
        className={` grid gap-5 lg:grid-cols-3 ${cols} sm:max-w-sm sm:mx-auto lg:max-w-full `}
      >
        {data.map((article) => (
          <div
            key={article}
            className="overflow-hidden transition-shadow duration-300 bg-white "
          >
            <a href="/" aria-label="Article">
              <img
                src={article.imgLink}
                className="object-cover w-full h-64 "
                alt=""
              />
            </a>
            <div className="py-5">
              <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                {article.postDate}
              </p>
              <a
                href="/"
                aria-label="Article"
                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-purple-700"
              >
                <p className="text-lg font-medium leading-6">{article.title}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
