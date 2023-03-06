import Link from "next/link";
import useFormattedDate from "../hooks/useFormatDate";

type PostPreviewProps = {
  frontmatter: any;
};

function PostPreview({ frontmatter }: PostPreviewProps) {
  return (
    <div className="mx-auto my-8">
      <h2 className="mb-2 font-serif text-lg font-semibold hover:underline sm:text-xl lg:text-2xl">
        <Link href={`/${frontmatter.slug}`}>{frontmatter.title}</Link>
      </h2>
      <div className="mb-2 flex flex-wrap items-center gap-4">
        <span className="text-slate-600 dark:text-slate-300">
          {useFormattedDate(frontmatter.date)}
        </span>
        <ul className="flex gap-4">
          {frontmatter.tags.map((tag: string) => (
            <li
              className="rounded-full bg-slate-200 py-1 px-2 text-sm text-slate-700 dark:bg-slate-700 dark:text-slate-300"
              key={tag}
            >
              {`#${tag}`}
            </li>
          ))}
        </ul>
      </div>
      <p className="prose mb-2 text-slate-700 dark:text-slate-300">
        {frontmatter.description}
      </p>
      <Link href={`/${frontmatter.slug}`}>
        <span className="cursor-pointer font-semibold text-teal-600 hover:underline dark:text-teal-300">
          Read More
        </span>
      </Link>
    </div>
  );
}

export default PostPreview;
