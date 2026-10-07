"use client";

import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface HeadLines {
  id: string;
  title: string;
}

const MarqueeClient = ({ headLines }: { headLines: HeadLines[] }) => {
  return (
    <div className="min-w-0 flex-1 overflow-hidden">
      <MarqueeText direction="right" duration={10} className="text-white py-1">
        {headLines.map((h) => (
          <span key={h.id}>
            <span>
              {h.title}
              <span className="mx-5">•</span>
            </span>
          </span>
        ))}
      </MarqueeText>
    </div>
  );
};

export default MarqueeClient;