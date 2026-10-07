import Image from "next/image";

interface News {
    id:string,
    title: string,
    description:string,
    category:string,
    imageAlt:string,
    imageUrl:string


}

const MainNews = ({ news }:{news: News[]}) => {
  const firstNews = news[0];
  const otherNews = news.slice(1);
 

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-4">
      <div className="flex gap-4">
        {/* Main News */}
        <div className="card bg-base-100 w-1/2 border border-gray-200 shadow-sm rounded-xl overflow-hidden">
          <Image
            width={600}
            height={600}
            src={firstNews.imageUrl}
            alt={firstNews.imageAlt}
            className="w-full h-56 object-cover"
          />

          <div className="card-body p-4">
            <span className="text-red-500 text-sm font-semibold">
              {firstNews.category}
            </span>

            <h2 className="card-title text-xl font-bold leading-snug">
              {firstNews.title}
            </h2>

            <p className="text-gray-500 text-sm leading-6">
              {firstNews.description}
            </p>
          </div>
        </div>

        {/* Other News */}
        <div className="w-1/2 border border-gray-200 rounded-xl overflow-hidden bg-base-100">
          {otherNews.slice(0,4).map((on) => (
            <div
              key={on.id}
              className="px-4 py-4 border-b border-gray-200 last:border-b-0"
            >
              <span className="text-red-500 text-sm font-semibold block mb-1">
                 {firstNews.category}
              </span>

              <h3 className="text-base font-semibold leading-6">
                {on.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainNews;