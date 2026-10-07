import NewsCard from "@/components/NewsCard";

interface INews {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
}

const CategoryIdPage = async ({params,}: {
  params: Promise<{ categoryId: string }>;
}) => {
  const { categoryId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryId}`,
  );
  const data = await res.json();

  const categoryNews: INews[] = data.data;

  return (
    <div className="max-w-7xl mx-auto py-5">
        <div>
            <h1 className="text-2xl font-bold border-b-2 border-red-700 pb-2 mb-5 ">{data.title}</h1>
        </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categoryNews.map((item) => (
          <NewsCard key={item.id} article={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryIdPage;
