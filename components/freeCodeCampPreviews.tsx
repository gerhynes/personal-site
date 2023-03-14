import useFormattedDate from "../hooks/useFormattedDate";

type FCCPreviewsProps = {
  previews: FCCPreview[];
};

export type FCCPreview = {
  title: string;
  linkText: string;
  date: string;
  description: string;
  tags: string[];
  url: string;
};

function FreeCodeCampPreviews({ previews }: FCCPreviewsProps) {
  return (
    <section className="border-t-2 border-b-2 border-slate-900 p-4 dark:border-slate-300">
      <h2 className="mb-4 font-serif text-xl font-semibold sm:text-2xl lg:text-3xl">
        freeCodeCamp Publications
      </h2>
      <p className="text-lg text-slate-700 dark:text-slate-300">
        Tutorials I&apos;ve published for freeCodeCamp.org.
      </p>
      {previews.map((preview) => (
        <article className="my-8" key={preview.title}>
          <h2 className="mb-2 font-serif text-lg font-semibold sm:text-xl lg:text-2xl">
            <a className="hover:underline" href={preview.url}>
              {preview.title}
            </a>
          </h2>
          <div className="mb-2 flex flex-wrap items-center gap-4">
            <span className=" text-slate-600 dark:text-slate-300">
              {useFormattedDate(preview.date)}
            </span>
            <ul className="flex gap-4">
              {preview.tags.map((tag: string) => (
                <li
                  className="rounded-full bg-slate-200 py-1 px-2 text-sm text-slate-700 dark:bg-slate-700 dark:text-slate-300"
                  key={tag}
                >
                  {`#${tag}`}
                </li>
              ))}
            </ul>
          </div>
          <p className="mb-2 text-slate-700 dark:text-slate-300">
            {preview.description}
          </p>
          <a href={preview.url}>
            <span className="cursor-pointer font-semibold text-teal-700 hover:underline dark:text-teal-300">
              Read more about {preview.linkText}
            </span>
          </a>
        </article>
      ))}
    </section>
  );
}
export default FreeCodeCampPreviews;
