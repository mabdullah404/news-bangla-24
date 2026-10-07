import MainNews from "@/components/MainNews";
import Marquee from "@/components/Marquee";

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sections = data.data;
  const mainNews = sections[0].articles;

  const otherSections = sections.slice(1);
  console.log(otherSections)

  return (
    <div>
      <Marquee></Marquee>

      <div className="grid  grid-cols-3 max-w-7xl mx-auto">

        {/* Main News */}
        <div className="col-span-2 ">

          <MainNews news={mainNews}></MainNews>
        </div>

        {/*  */}
        <div className="col-span-1 bg-amber-300 py-6">

        </div>
      </div>
    </div>
  );
}
