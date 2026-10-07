import Image from "next/image";
import { notFound } from "next/navigation";

interface IBlock {
  type?: string;
  text?: unknown;
  content?: unknown;
  value?: unknown;
  src?: string;
  url?: string;
  imageUrl?: string;
  alt?: string;
  caption?: unknown;
}

type BlocksHolder = { blocks?: IBlock[] };

interface IArticle {
  id: string;
  title: unknown;
  description?: unknown;
  imageUrl?: string;
  imageAlt?: string;
  imageCaption?: unknown;
  author?: unknown;
  publishedAt?: string;
  firstPublished?: string;
  wordCount?: number;
  source?: string;
  sourceUrl?: string;
  tags?: string[];
  content?: unknown;
  body?: unknown;
}

// string ba { blocks: [...] } jai ashuk, shudhu text ber kore ane.
// Eta na thakle React object render korte gele "Objects are not valid as a React child" error dey.
const toText = (value: unknown): string => {
  if (!value) return "";
  if (typeof value === "string") return value;
  if (typeof value === "number") return String(value);
  if (Array.isArray(value)) return value.map(toText).join(" ");
  if (typeof value === "object") {
    const obj = value as Record<string, unknown>;
    if (obj.blocks) return toText(obj.blocks);
    return toText(obj.text ?? obj.content ?? obj.value);
  }
  return "";
};

// body-r blocks kon field-er bhitore ache (content / body / description) sheta khuje ber kore.
const findBlocks = (article: IArticle): (IBlock | string)[] => {
  for (const v of [article.content, article.body, article.description]) {
    if (Array.isArray(v)) return v;
    if (v && typeof v === "object") {
      const blocks = (v as BlocksHolder).blocks;
      if (Array.isArray(blocks)) return blocks;
    }
  }
  return [];
};

const ArticlePage = async ({
  params,
}: {
  params: Promise<{ articleId: string }>;
}) => {
  const { articleId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${articleId}`,
  );
  const data = await res.json();

  if (!res.ok || !data?.data) notFound();

  const article: IArticle = data.data;

  const blocks = findBlocks(article);

  // description jodi plain string hoy tahole summary hishebe dekhabe,
  // object ({ blocks }) hole body hishebe upore blocks e already ache.
  const summary =
    typeof article.description === "string" ? article.description : "";

  const rawDate = article.firstPublished ?? article.publishedAt;
  const date = rawDate
    ? new Date(rawDate).toLocaleDateString("bn-BD", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  const author = toText(article.author);
  const title = toText(article.title);
  const imageCaption = toText(article.imageCaption);

  return (
    <article className="max-w-3xl mx-auto py-6 px-4">
      <h1 className="text-3xl font-bold leading-snug">{title}</h1>

      {summary && <p className="mt-3 text-lg text-gray-600">{summary}</p>}

      <div className="mt-4 flex flex-wrap gap-x-3 text-sm text-gray-500">
        {author && <span>{author}</span>}
        {date && <span>{date}</span>}
        {article.wordCount && <span>{article.wordCount} শব্দ</span>}
      </div>

      {article.imageUrl && (
        <figure className="mt-5">
          <Image
            src={article.imageUrl}
            alt={article.imageAlt || title}
            width={900}
            height={500}
            className="w-full rounded-lg"
          />
          {imageCaption && (
            <figcaption className="mt-2 text-sm text-gray-500">
              {imageCaption}
            </figcaption>
          )}
        </figure>
      )}

      <div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-800">
        {blocks.map((item, i) => {
          const block: IBlock =
            typeof item === "string" ? { type: "paragraph", text: item } : item;
          const text = toText(block.text ?? block.content ?? block.value);

          switch (block.type) {
            case "heading":
            case "subheadline":
            case "h2":
              return (
                <h2 key={i} className="text-2xl font-bold pt-4">
                  {text}
                </h2>
              );

            case "image": {
              const src = block.src ?? block.url ?? block.imageUrl;
              if (!src) return null;
              const caption = toText(block.caption);
              return (
                <figure key={i}>
                  <Image
                    src={src}
                    alt={block.alt || caption || ""}
                    width={900}
                    height={500}
                    className="w-full rounded-lg"
                  />
                  {caption && (
                    <figcaption className="mt-2 text-sm text-gray-500">
                      {caption}
                    </figcaption>
                  )}
                </figure>
              );
            }

            case "quote":
              return (
                <blockquote
                  key={i}
                  className="border-l-4 border-red-700 pl-4 italic"
                >
                  {text}
                </blockquote>
              );

            default:
              return text ? <p key={i}>{text}</p> : null;
          }
        })}
      </div>

      {article.tags && article.tags.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {article.source && (
        <p className="mt-6 text-sm text-gray-500">Source: {article.source}</p>
      )}
    </article>
  );
};

export default ArticlePage;