import useFormatDate from "../hooks/useFormatDate";

type FCCPreviewsProps = {
  previews: FCCPreview[];
};

export type FCCPreview = {
  title: string;
  date: string;
  description: string;
  url: string;
};

function FreeCodeCampPreviews({ previews }: FCCPreviewsProps) {
  return (
    <div className="border-t-2 border-b-2 border-slate-900 p-4">
      <h2 className="mb-4 font-serif text-xl font-semibold sm:text-2xl lg:text-3xl">
        freeCodeCamp Publications
      </h2>
      <p className="text-lg text-slate-700">
        Tutorials I've published for freeCodeCamp.org.
      </p>
      {previews.map((preview) => (
        <div className="my-8" key={preview.date}>
          <h2 className="mb-2 font-serif text-lg font-semibold sm:text-xl lg:text-2xl">
            <a className="hover:underline" href={preview.url}>
              {preview.title}
            </a>
          </h2>
          <span className="mb-2 block text-slate-500">
            {useFormatDate(preview.date)}
          </span>
          <p className="mb-2 text-slate-700">{preview.description}</p>
          <a href={preview.url}>
            <span className="cursor-pointer font-semibold text-teal-600 hover:underline">
              Read More
            </span>
          </a>
        </div>
      ))}
    </div>
  );
}
export default FreeCodeCampPreviews;
