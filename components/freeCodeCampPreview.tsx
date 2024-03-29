import useFormattedDate from "../hooks/useFormattedDate";

type FCCPreviewProps = {
  preview: FCCPreview;
};

export type FCCPreview = {
  title: string;
  linkText: string;
  date: string;
  description: string;
  tags: string[];
  url: string;
};

export default function FreeCodeCampPreview({ preview }: FCCPreviewProps) {
  return (
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
  );
}
