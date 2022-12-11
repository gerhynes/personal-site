import Link from "next/link";
import Image from "next/image";

type ProjectPreviewProps = {
  frontmatter: any;
};

function ProjectPreview({ frontmatter }: ProjectPreviewProps) {
  return (
    <div className="mx-auto my-8">
      <Image
        src={frontmatter.image}
        alt={frontmatter.title}
        width="1898"
        height="923"
      />
      <h2 className="mb-2 font-serif text-2xl font-semibold">
        {frontmatter.title}
      </h2>
      <span className="mb-2 block">
        {new Date(frontmatter.date).toLocaleDateString()}
      </span>
      <p className="mb-2 text-lg">{frontmatter.description}</p>
      <Link href={`/projects/${frontmatter.slug}`}>
        <span className="cursor-pointer  text-lg text-teal-700 underline">
          Read More
        </span>
      </Link>
    </div>
  );
}

export default ProjectPreview;
