import Home from "../pages";
export const Blog = ({ data }) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
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
                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-xl font-semibold leading-5">
                  {article.title}
                </p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
