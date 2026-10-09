import MainNews from "@/components/MainNews";

import MostRead from "@/components/MostRead";
import NewsCard from "@/components/NewsCard";

interface IOtherSection {
  curationId: string;
  title: string;
  articles: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    type: string;
    category?: string;
  }[];
}

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sections = data.data;
  const mainNews = sections[0].articles;

  const otherSections: IOtherSection[] = sections
    .slice(1)
    .map((s: IOtherSection) => ({
      ...s,
      articles: s.articles.filter((a) => a.type !== "link"),
    }))
    .filter((s: IOtherSection) => s.articles.length > 0);

  return (
    <div>
      <div className="grid grid-cols-3 gap-5 max-w-7xl mx-auto">
        {/* Main News */}
        <div className="col-span-2">
          <MainNews news={mainNews} />

          <div className="grid gap-5 mt-5">
            {otherSections.map((os) => (
              <div key={os.curationId}>
                <h1 className="font-bold border-b-2 pb-1 border-red-700 mb-2">
                  {os.title}
                </h1>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {os.articles.map((article) => (
                    <NewsCard key={article.id} article={article} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Most Read Category */}
        <div className="col-span-1">
          <MostRead />
        </div>
      </div>
    </div>
  );
}
