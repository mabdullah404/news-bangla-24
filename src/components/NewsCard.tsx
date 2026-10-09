import Image from "next/image";
import Link from "next/link";

interface News {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  category?: string;
}

const NewsCard = ({ article }: { article: News }) => {
  return (
    <Link
      href={`/article/${article.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
    >
      {/* Image */}
      <div className="relative h-36 w-full overflow-hidden">
        <Image
          width={600}
          height={400}
          src={article.imageUrl}
          alt={article.imageAlt || article.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 p-3">
        <span className="text-xs font-semibold text-red-600">
          {article.category}
        </span>

        <h2 className="line-clamp-3 text-base font-semibold leading-snug text-gray-900 group-hover:text-red-700">
          {article.title}
        </h2>

        <p className="line-clamp-2 text-sm text-gray-500">
          {article.description}
        </p>
      </div>
    </Link>
  );
};

export default NewsCard;