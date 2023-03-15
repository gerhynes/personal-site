import FreeCodeCampPreview from "./freeCodeCampPreview";
import { FCCPreview } from "./freeCodeCampPreview";

type FCCPreviewsProps = {
  previews: FCCPreview[];
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
        <FreeCodeCampPreview preview={preview} key={preview.title} />
      ))}
    </section>
  );
}
export default FreeCodeCampPreviews;
