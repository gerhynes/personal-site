import Link from "next/link";
import Image from "next/image";

type ProjectPreviewProps = {
  frontmatter: any;
};

function ProjectPreview({ frontmatter }: ProjectPreviewProps) {
  return (
    <div className="mx-auto my-12 grid gap-8 sm:grid-cols-2">
      <div className="flex flex-col justify-center">
        <div className="w-full rounded-lg border-2 border-white dark:border-slate-300">
          <Image
            className="rounded-lg"
            src={frontmatter.image}
            alt={frontmatter.title}
            width="1898"
            height="923"
            sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
          />
        </div>
      </div>
      <div className="">
        <h2 className="mb-2 font-serif text-2xl font-semibold text-slate-900 dark:text-white">
          {frontmatter.title}
        </h2>
        <ul className="mb-2 flex flex-wrap gap-4">
          {frontmatter.tags.map((tag: string) => (
            <li
              className="rounded-full bg-slate-200 py-1 px-2 text-sm text-slate-700 dark:bg-slate-700 dark:text-slate-300"
              key={tag}
            >
              {`#${tag}`}
            </li>
          ))}
        </ul>
        <p className="mb-2 text-lg text-slate-700 dark:text-slate-300">
          {frontmatter.description}
        </p>
        <Link href={`/projects/${frontmatter.slug}`}>
          <span className="cursor-pointer  text-lg text-teal-700 underline dark:text-teal-300">
            View {frontmatter.title}
          </span>
        </Link>
      </div>
    </div>
  );
}

export default ProjectPreview;
