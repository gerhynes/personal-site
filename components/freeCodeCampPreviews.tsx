import Link from "next/link";
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
    <div className="rounded-lg border-2 border-green-800 p-4">
      <p className="mb-4 text-lg">
        I've also been published by{" "}
        <a
          className="cursor-pointer underline"
          href="https://www.freecodecamp.org/news/"
        >
          freeCodeCamp
        </a>
      </p>
      {previews.map((preview) => (
        <div className="my-8" key={preview.date}>
          <h2 className="mb-2 font-serif text-lg font-semibold sm:text-xl lg:text-2xl">
            <Link className="hover:underline" href={preview.url}>
              {preview.title}
            </Link>
          </h2>
          <span className="mb-2 block text-gray-500">
            {useFormatDate(preview.date)}
          </span>
          <p className="mb-2 block">{preview.description}</p>
          <Link href={preview.url}>
            <span className="cursor-pointer text-teal-700 hover:underline">
              Read More
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
}
export default FreeCodeCampPreviews;
