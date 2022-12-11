import Link from "next/link";

type PostPreviewProps = {
  frontmatter: any;
};

function PostPreview({ frontmatter }: PostPreviewProps) {
  return (
    <div className="mx-auto my-8">
      <h2 className="mb-2 font-serif text-lg font-semibold sm:text-xl lg:text-2xl">
        <Link className="hover:underline" href={`/${frontmatter.slug}`}>
          {frontmatter.title}
        </Link>
      </h2>
      <span className="mb-2 block text-gray-500">
        {new Date(frontmatter.date).toLocaleDateString()}
      </span>
      <p className="prose mb-2 block">{frontmatter.description}</p>
      <Link href={`/${frontmatter.slug}`}>
        <span className="cursor-pointer text-teal-700 hover:underline">
          Read More
        </span>
      </Link>
    </div>
  );
}

export default PostPreview;
