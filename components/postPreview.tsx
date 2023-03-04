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
      <span className="mb-2 block text-slate-500">
        {useFormattedDate(frontmatter.date)}
      </span>
      <p className="prose mb-2 text-slate-700">{frontmatter.description}</p>
      <Link href={`/${frontmatter.slug}`}>
        <span className="cursor-pointer font-semibold text-teal-600 hover:underline">
          Read More
        </span>
      </Link>
    </div>
  );
}

export default PostPreview;
