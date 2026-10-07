import Link from "next/link";

interface IMostReadNews {
  id: string;
  title: string;
}

const MostRead = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const data = await res.json();

  const mostNews: IMostReadNews[] = data.data;

  return (
    <div className="mt-5 bg-white border border-gray-200 rounded-lg p-5">
      <h2 className="text-xl font-bold mb-4">সর্বাধিক পঠিত</h2>

      <ol className="space-y-4">
        {mostNews.slice(0, 10).map((news, index) => (
          <li key={news.id} className="flex items-start gap-3">
            <span className="text-2xl font-serif text-red-600 leading-none w-6 shrink-0">
              {index + 1}
            </span>

            <Link
              href={`/article/${news.id}`}
              className="text-sm font-medium leading-snug hover:text-red-700"
            >
              {news.title}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default MostRead;