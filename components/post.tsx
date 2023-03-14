import Image from "next/image";
import useFormattedDate from "../hooks/useFormattedDate";

type PostProps = {
  frontmatter: any;
  children: React.ReactNode;
};

function Post({ frontmatter, children }: PostProps) {
  return (
    <article>
      <h2 className="py-8 font-serif text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl lg:text-4xl">
        {frontmatter.title}
      </h2>
      <div className="mb-4 flex rounded-lg border-2 border-white dark:border-slate-300">
        <Image
          className="rounded-lg"
          src={frontmatter.image}
          alt={frontmatter.title}
          width="1600"
          height="800"
        />
      </div>
      <span className="text-slate-600 dark:text-slate-300">
        {useFormattedDate(frontmatter.date)}
      </span>
      <div className="prose prose-slate mx-auto mt-4 prose-headings:font-serif prose-a:text-teal-700 dark:prose-invert lg:prose-lg">
        {children}
      </div>
    </article>
  );
}
export default Post;
