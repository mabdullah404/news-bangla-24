import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface HeadLines {
  id: string;
  title: string;
}

const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
  const data = await res.json();
  const headLines: HeadLines[] = await data.data;

  console.log(headLines);

  return (
    <div className="bg-red-700  ">
      <div className="flex max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-red-800 border-none py-1">
          <h1 className="px-5 text-white">সর্বশেষ</h1>
        </div>

        <MarqueeText
          direction="right"
          duration={10}
          className="text-white py-1"
        >
          {headLines.map((h) => (
            <span key={h.id}>
              <span>
                <Link href={`/article/${h.id}`}>{h.title}</Link>
                <span className="mx-5">•</span>
              </span>
            </span>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
