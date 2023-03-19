import Image from "next/image";
import useFormattedDate from "../hooks/useFormattedDate";

type ProjectProps = {
  frontmatter: any;
  children: React.ReactNode;
};

function Project({ frontmatter, children }: ProjectProps) {
  return (
    <article className="mb-8">
      <h2 className="py-8 font-serif text-2xl font-bold sm:text-3xl lg:text-4xl">
        {frontmatter.title}
      </h2>
      <div className="mb-4 flex rounded-lg border-2 border-white dark:border-slate-300">
        <Image
          className="rounded-lg"
          src={frontmatter.image}
          alt={frontmatter.title}
          width="1898"
          height="923"
        />
      </div>
      <span className="text-slate-600 dark:text-slate-300">
        {useFormattedDate(frontmatter.date)}
      </span>
      <div className="prose prose-slate mx-auto my-4 prose-headings:font-serif prose-a:text-teal-700 dark:prose-invert lg:prose-lg">
        {children}
      </div>
      <div className="flex flex-wrap justify-between border-t-2 border-slate-300 py-4">
        <a
          className="mb-4 block cursor-pointer font-semibold text-teal-700 hover:underline dark:text-teal-300"
          href={frontmatter.repoUrl}
        >
          View code for {frontmatter.title}
        </a>
        {frontmatter.siteUrl.length !== 0 ? (
          <a
            className="mb-4 block cursor-pointer font-semibold text-teal-700 hover:underline dark:text-teal-300"
            href={frontmatter.siteUrl}
          >
            View {frontmatter.title} project
          </a>
        ) : null}
      </div>
    </article>
  );
}
export default Project;
